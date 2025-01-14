"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = require("react");
var stack_1 = require("@patternfly/react-styles/css/layouts/Stack/stack");
var react_styles_1 = require("@patternfly/react-styles");
exports.StackItem = function (_a) {
    var _b = _a.isFilled, isFilled = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.children, children = _d === void 0 ? null : _d, props = __rest(_a, ["isFilled", "className", "children"]);
    return (<div {...props} className={react_styles_1.css(stack_1["default"].stackItem, isFilled && stack_1["default"].modifiers.fill, className)}>
    {children}
  </div>);
};
