import * as React from 'react';
import { shallow } from 'enzyme';
import { Chart } from '../Chart';
import { ChartGroup } from '../ChartGroup';
import { ChartLine } from './ChartLine';
Object.values([true, false]).forEach(isRead => {
  test('ChartLine', () => {
    const view = shallow(React.createElement(ChartLine, null));
    expect(view).toMatchSnapshot();
  });
});
test('renders component data', () => {
  const view = shallow(React.createElement(Chart, {
    minDomain: {
      y: 0
    },
    height: 200,
    width: 200
  }, React.createElement(ChartGroup, null, React.createElement(ChartLine, {
    data: [{
      x: 1,
      y: 1
    }, {
      x: 2,
      y: 2
    }, {
      x: 3,
      y: 5
    }, {
      x: 4,
      y: 3
    }]
  }), React.createElement(ChartLine, {
    data: [{
      x: 1,
      y: 2
    }, {
      x: 2,
      y: 1
    }, {
      x: 3,
      y: 7
    }, {
      x: 4,
      y: 4
    }]
  }), React.createElement(ChartLine, {
    data: [{
      x: 1,
      y: 3
    }, {
      x: 2,
      y: 4
    }, {
      x: 3,
      y: 9
    }, {
      x: 4,
      y: 5
    }]
  }), React.createElement(ChartLine, {
    data: [{
      x: 1,
      y: 3
    }, {
      x: 2,
      y: 3
    }, {
      x: 3,
      y: 8
    }, {
      x: 4,
      y: 7
    }]
  }))));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ChartLine.test.js.map