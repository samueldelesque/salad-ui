'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _area = require('./area/area');

var _area2 = _interopRequireDefault(_area);

var _bar = require('./bar/bar');

var _bar2 = _interopRequireDefault(_bar);

var _circlePie = require('./circle-pie/circle-pie');

var _circlePie2 = _interopRequireDefault(_circlePie);

var _barMetric = require('./bar-metric/bar-metric');

var _barMetric2 = _interopRequireDefault(_barMetric);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Area: _area2.default,
  CirclePie: _circlePie2.default,
  BarMetric: _barMetric2.default,
  Bar: _bar2.default
};