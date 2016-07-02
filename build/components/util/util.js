'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alert = require('./alert/alert');

var _alert2 = _interopRequireDefault(_alert);

var _anchor = require('./anchor/anchor');

var _anchor2 = _interopRequireDefault(_anchor);

var _badge = require('./badge/badge');

var _badge2 = _interopRequireDefault(_badge);

var _button = require('./button/button');

var _button2 = _interopRequireDefault(_button);

var _formatNumber = require('./format-number/format-number');

var _formatNumber2 = _interopRequireDefault(_formatNumber);

var _grid = require('./grid/grid');

var _grid2 = _interopRequireDefault(_grid);

var _profilePicture = require('./profile-picture/profile-picture');

var _profilePicture2 = _interopRequireDefault(_profilePicture);

var _tagList = require('./tag-list/tag-list');

var _tagList2 = _interopRequireDefault(_tagList);

var _textClamp = require('./text-clamp/text-clamp');

var _textClamp2 = _interopRequireDefault(_textClamp);

var _timeAndViews = require('./time-and-views/time-and-views');

var _timeAndViews2 = _interopRequireDefault(_timeAndViews);

var _overlay = require('./overlay/overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _trans = require('./trans/trans');

var _trans2 = _interopRequireDefault(_trans);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Alert: _alert2.default,
  Anchor: _anchor2.default,
  Badge: _badge2.default,
  Button: _button2.default,
  FormatNumber: _formatNumber2.default,
  Grid: _grid2.default,
  TagList: _tagList2.default,
  TextClamp: _textClamp2.default,
  ProfilePicture: _profilePicture2.default,
  TimeAndViews: _timeAndViews2.default,
  Overlay: _overlay2.default,
  Trans: _trans2.default,
  translate: _trans.translate
};