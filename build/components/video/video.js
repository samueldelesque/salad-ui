'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _videos = require('./grid/videos');

var _videos2 = _interopRequireDefault(_videos);

var _list = require('./list/list');

var _list2 = _interopRequireDefault(_list);

var _preview = require('./preview/preview');

var _preview2 = _interopRequireDefault(_preview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Grid: _videos2.default,
  List: _list2.default,
  Preview: _preview2.default
};