import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { getAsync, setAsync, fetchAll } from './redis-client'

dotenv.config();
const app = express();
app.use(cors())
app.get('/store/:ex/:key', async (req,res)=>{
    const { key, ex } = req.params;
    const value = req.query.value;
    res
    .status(200)
    .header( "Access-Control-Allow-Origin:*")
    .header("Access-Control-Allow-Credentials: true")
    .send( await setAsync(`concurrent:${key}`, req.query.value,'EX', ex))
})

app.get('/name/:id',async (req,res)=>{
    res
    .status(200)
    .send(await getAsync(`concurrent:${req.params.id}`))
})

app.get('/all',async (req,res)=>{
    res
    .status(200)
    .send(await fetchAll())
})

app.listen(process.env.PORT,()=>{
    console.log(`We are up listening on ${process.env.PORT}`)
})
