'use strict';

require('universal-fetch');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _enzyme = require('enzyme');

var _chart = require('../components/chart/chart');

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiAsPromised2.default);

describe('Area', function () {
  var area = (0, _enzyme.shallow)(_react2.default.createElement(_chart2.default.Area, {
    width: 900,
    height: 300,
    showFirstAndLastTip: true,
    labelTemplate: function labelTemplate(data) {
      return 'Cats ate ' + data.value + ' fish that day.';
    },
    data: [{ time: new Date('2010-01-01'), value: 3 }, { time: new Date('2010-01-02'), value: 5 }, { time: new Date('2010-01-03'), value: 2 }, { time: new Date('2010-01-04'), value: 6 }]
  }));
  it('N .tip-text-date (if showFirstAndLastTip = true)', function () {
    (0, _chai.expect)(area.find('.tip-text-date').length).to.equal(4);
  });
  it('Should have 1 line', function () {
    (0, _chai.expect)(area.find('polyline').length).to.equal(1);
  });
});

describe('CirclePie', function () {
  var pie = (0, _enzyme.shallow)(_react2.default.createElement(_chart2.default.CirclePie, {
    width: 100,
    height: 100,
    strokeWidth: 7,
    percent: 42,
    strokeColor: 'rgb(31, 207, 101)',
    fillColor: 'rgb(31, 207, 101)'
  }));
  it('Text should be %', function () {
    (0, _chai.expect)(pie.find('text').text()).to.equal('42%');
  });
});