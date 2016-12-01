'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _saladUi = require('../salad-ui');

var _saladUi2 = _interopRequireDefault(_saladUi);

var _icon = require('../icon/icon');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _glob = require('../../lib/glob.js');

var _glob2 = _interopRequireDefault(_glob);

var _demoAutocomplete = require('./demo-autocomplete');

var _demoAutocomplete2 = _interopRequireDefault(_demoAutocomplete);

var _videoComponents = require('./video-components');

var videoComponents = _interopRequireWildcard(_videoComponents);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('Enjoying this toolkit? Come to 156 5th ave in NYC for ' + String.fromCharCode(55356, 57211) + ' Friday 6pm.');
if (_glob2.default.canUseDom()) {
  console.log('Test SaladUI functions directly using window.SaladUI');
  window.SaladUI = _saladUi2.default;
  // SaladUI.Util.Trans.enableDebug()
  window.enableHighlight = function () {
    return _saladUi2.default.Util.Trans.enableHighlight();
  };
}
var realtime_views = { "label": 'Vues simultanées', "data": [{ "id": 1480448720, "value": 0, "label": "vues" }, { "id": 1480448730, "value": 5, "label": "vues" }, { "id": 1480448740, "value": 10, "label": "vues" }, { "id": 1480448750, "value": 10, "label": "vues" }, { "id": 1480448760, "value": 11, "label": "vues" }, { "id": 1480448770, "value": 11, "label": "vues" }, { "id": 1480448780, "value": 10, "label": "vues" }, { "id": 1480448790, "value": 12, "label": "vues" }, { "id": 1480448800, "value": 11, "label": "vues" }, { "id": 1480448810, "value": 13, "label": "vues" }, { "id": 1480448820, "value": 15, "label": "vues" }, { "id": 1480448830, "value": 15, "label": "vues" }, { "id": 1480448840, "value": 18, "label": "vues" }, { "id": 1480448850, "value": 18, "label": "vues" }, { "id": 1480448860, "value": 24, "label": "vues" }, { "id": 1480448870, "value": 20, "label": "vues" }, { "id": 1480448880, "value": 22, "label": "vues" }, { "id": 1480448890, "value": 20, "label": "vues" }, { "id": 1480448900, "value": 26, "label": "vues" }, { "id": 1480448910, "value": 24, "label": "vues" }, { "id": 1480448920, "value": 24, "label": "vues" }, { "id": 1480448930, "value": 24, "label": "vues" }, { "id": 1480448940, "value": 24, "label": "vues" }, { "id": 1480448950, "value": 27, "label": "vues" }, { "id": 1480448960, "value": 20, "label": "vues" }, { "id": 1480448970, "value": 29, "label": "vues" }, { "id": 1480448980, "value": 23, "label": "vues" }, { "id": 1480448990, "value": 24, "label": "vues" }, { "id": 1480449000, "value": 24, "label": "vues" }, { "id": 1480449010, "value": 24, "label": "vues" }, { "id": 1480449020, "value": 24, "label": "vues" }, { "id": 1480449030, "value": 21, "label": "vues" }, { "id": 1480449040, "value": 23, "label": "vues" }, { "id": 1480449050, "value": 24, "label": "vues" }, { "id": 1480449060, "value": 22, "label": "vues" }, { "id": 1480449070, "value": 20, "label": "vues" }, { "id": 1480449080, "value": 22, "label": "vues" }, { "id": 1480449090, "value": 22, "label": "vues" }, { "id": 1480449100, "value": 21, "label": "vues" }, { "id": 1480449110, "value": 22, "label": "vues" }, { "id": 1480449120, "value": 24, "label": "vues" }, { "id": 1480449130, "value": 26, "label": "vues" }, { "id": 1480449140, "value": 20, "label": "vues" }, { "id": 1480449150, "value": 22, "label": "vues" }, { "id": 1480449160, "value": 22, "label": "vues" }, { "id": 1480449170, "value": 23, "label": "vues" }, { "id": 1480449180, "value": 25, "label": "vues" }, { "id": 1480449190, "value": 27, "label": "vues" }, { "id": 1480449200, "value": 27, "label": "vues" }, { "id": 1480449210, "value": 23, "label": "vues" }, { "id": 1480449220, "value": 33, "label": "vues" }, { "id": 1480449230, "value": 27, "label": "vues" }, { "id": 1480449240, "value": 28, "label": "vues" }, { "id": 1480449250, "value": 28, "label": "vues" }, { "id": 1480449260, "value": 22, "label": "vues" }, { "id": 1480449270, "value": 25, "label": "vues" }, { "id": 1480449280, "value": 84, "label": "vues" }, { "id": 1480449290, "value": 303, "label": "vues" }, { "id": 1480449300, "value": 271, "label": "vues" }, { "id": 1480449310, "value": 308, "label": "vues" }, { "id": 1480449320, "value": 312, "label": "vues" }, { "id": 1480449330, "value": 280, "label": "vues" }, { "id": 1480449340, "value": 279, "label": "vues" }, { "id": 1480449350, "value": 306, "label": "vues" }, { "id": 1480449360, "value": 293, "label": "vues" }, { "id": 1480449370, "value": 34, "label": "vues" }, { "id": 1480449380, "value": 114, "label": "vues" }, { "id": 1480449390, "value": 202, "label": "vues" }, { "id": 1480449400, "value": 228, "label": "vues" }, { "id": 1480449410, "value": 280, "label": "vues" }, { "id": 1480449420, "value": 181, "label": "vues" }, { "id": 1480449430, "value": 173, "label": "vues" }, { "id": 1480449440, "value": 266, "label": "vues" }, { "id": 1480449450, "value": 299, "label": "vues" }, { "id": 1480449460, "value": 316, "label": "vues" }, { "id": 1480449470, "value": 326, "label": "vues" }, { "id": 1480449480, "value": 199, "label": "vues" }, { "id": 1480449490, "value": 36, "label": "vues" }, { "id": 1480449500, "value": 36, "label": "vues" }, { "id": 1480449510, "value": 39, "label": "vues" }, { "id": 1480449520, "value": 42, "label": "vues" }, { "id": 1480449530, "value": 40, "label": "vues" }, { "id": 1480449540, "value": 45, "label": "vues" }, { "id": 1480449550, "value": 87, "label": "vues" }, { "id": 1480449560, "value": 271, "label": "vues" }, { "id": 1480449570, "value": 302, "label": "vues" }, { "id": 1480449580, "value": 192, "label": "vues" }, { "id": 1480449590, "value": 59, "label": "vues" }, { "id": 1480449600, "value": 102, "label": "vues" }, { "id": 1480449610, "value": 48, "label": "vues" }, { "id": 1480449620, "value": 48, "label": "vues" }, { "id": 1480449630, "value": 49, "label": "vues" }, { "id": 1480449640, "value": 49, "label": "vues" }, { "id": 1480449650, "value": 55, "label": "vues" }, { "id": 1480449660, "value": 57, "label": "vues" }, { "id": 1480449670, "value": 57, "label": "vues" }, { "id": 1480449680, "value": 60, "label": "vues" }, { "id": 1480449690, "value": 61, "label": "vues" }, { "id": 1480449700, "value": 63, "label": "vues" }, { "id": 1480449710, "value": 66, "label": "vues" }, { "id": 1480449720, "value": 65, "label": "vues" }, { "id": 1480449730, "value": 68, "label": "vues" }, { "id": 1480449740, "value": 69, "label": "vues" }, { "id": 1480449750, "value": 69, "label": "vues" }, { "id": 1480449760, "value": 68, "label": "vues" }, { "id": 1480449770, "value": 69, "label": "vues" }, { "id": 1480449780, "value": 70, "label": "vues" }, { "id": 1480449790, "value": 73, "label": "vues" }, { "id": 1480449800, "value": 74, "label": "vues" }, { "id": 1480449810, "value": 78, "label": "vues" }, { "id": 1480449820, "value": 80, "label": "vues" }, { "id": 1480449830, "value": 80, "label": "vues" }, { "id": 1480449840, "value": 83, "label": "vues" }, { "id": 1480449850, "value": 84, "label": "vues" }, { "id": 1480449860, "value": 82, "label": "vues" }, { "id": 1480449870, "value": 83, "label": "vues" }, { "id": 1480449880, "value": 84, "label": "vues" }, { "id": 1480449890, "value": 87, "label": "vues" }, { "id": 1480449900, "value": 88, "label": "vues" }, { "id": 1480449910, "value": 92, "label": "vues" }, { "id": 1480449920, "value": 98, "label": "vues" }, { "id": 1480449930, "value": 92, "label": "vues" }, { "id": 1480449940, "value": 87, "label": "vues" }, { "id": 1480449950, "value": 91, "label": "vues" }, { "id": 1480449960, "value": 93, "label": "vues" }, { "id": 1480449970, "value": 97, "label": "vues" }, { "id": 1480449980, "value": 99, "label": "vues" }, { "id": 1480449990, "value": 101, "label": "vues" }, { "id": 1480450000, "value": 107, "label": "vues" }, { "id": 1480450010, "value": 119, "label": "vues" }, { "id": 1480450020, "value": 118, "label": "vues" }, { "id": 1480450030, "value": 113, "label": "vues" }, { "id": 1480450040, "value": 113, "label": "vues" }, { "id": 1480450050, "value": 112, "label": "vues" }, { "id": 1480450060, "value": 109, "label": "vues" }, { "id": 1480450070, "value": 103, "label": "vues" }, { "id": 1480450080, "value": 105, "label": "vues" }, { "id": 1480450090, "value": 104, "label": "vues" }, { "id": 1480450100, "value": 101, "label": "vues" }, { "id": 1480450110, "value": 106, "label": "vues" }, { "id": 1480450120, "value": 103, "label": "vues" }, { "id": 1480450130, "value": 100, "label": "vues" }, { "id": 1480450140, "value": 100, "label": "vues" }, { "id": 1480450150, "value": 103, "label": "vues" }, { "id": 1480450160, "value": 109, "label": "vues" }, { "id": 1480450170, "value": 111, "label": "vues" }, { "id": 1480450180, "value": 107, "label": "vues" }, { "id": 1480450190, "value": 104, "label": "vues" }, { "id": 1480450200, "value": 108, "label": "vues" }, { "id": 1480450210, "value": 108, "label": "vues" }, { "id": 1480450220, "value": 114, "label": "vues" }, { "id": 1480450230, "value": 113, "label": "vues" }, { "id": 1480450240, "value": 105, "label": "vues" }, { "id": 1480450250, "value": 114, "label": "vues" }, { "id": 1480450260, "value": 118, "label": "vues" }, { "id": 1480450270, "value": 113, "label": "vues" }, { "id": 1480450280, "value": 122, "label": "vues" }, { "id": 1480450290, "value": 128, "label": "vues" }, { "id": 1480450300, "value": 123, "label": "vues" }, { "id": 1480450310, "value": 123, "label": "vues" }, { "id": 1480450320, "value": 125, "label": "vues" }, { "id": 1480450330, "value": 127, "label": "vues" }, { "id": 1480450340, "value": 128, "label": "vues" }, { "id": 1480450350, "value": 128, "label": "vues" }, { "id": 1480450360, "value": 127, "label": "vues" }, { "id": 1480450370, "value": 129, "label": "vues" }, { "id": 1480450380, "value": 130, "label": "vues" }, { "id": 1480450390, "value": 131, "label": "vues" }, { "id": 1480450400, "value": 134, "label": "vues" }, { "id": 1480450410, "value": 134, "label": "vues" }, { "id": 1480450420, "value": 134, "label": "vues" }, { "id": 1480450430, "value": 135, "label": "vues" }, { "id": 1480450440, "value": 136, "label": "vues" }, { "id": 1480450450, "value": 136, "label": "vues" }, { "id": 1480450460, "value": 137, "label": "vues" }, { "id": 1480450470, "value": 141, "label": "vues" }, { "id": 1480450480, "value": 146, "label": "vues" }, { "id": 1480450490, "value": 147, "label": "vues" }, { "id": 1480450500, "value": 145, "label": "vues" }, { "id": 1480450510, "value": 145, "label": "vues" }, { "id": 1480450520, "value": 147, "label": "vues" }, { "id": 1480450530, "value": 151, "label": "vues" }, { "id": 1480450540, "value": 146, "label": "vues" }, { "id": 1480450550, "value": 145, "label": "vues" }, { "id": 1480450560, "value": 147, "label": "vues" }, { "id": 1480450570, "value": 143, "label": "vues" }, { "id": 1480450580, "value": 135, "label": "vues" }, { "id": 1480450590, "value": 132, "label": "vues" }, { "id": 1480450600, "value": 136, "label": "vues" }, { "id": 1480450610, "value": 138, "label": "vues" }, { "id": 1480450620, "value": 139, "label": "vues" }, { "id": 1480450630, "value": 141, "label": "vues" }, { "id": 1480450640, "value": 142, "label": "vues" }, { "id": 1480450650, "value": 141, "label": "vues" }, { "id": 1480450660, "value": 134, "label": "vues" }, { "id": 1480450670, "value": 133, "label": "vues" }, { "id": 1480450680, "value": 135, "label": "vues" }, { "id": 1480450690, "value": 135, "label": "vues" }, { "id": 1480450700, "value": 132, "label": "vues" }, { "id": 1480450710, "value": 131, "label": "vues" }, { "id": 1480450720, "value": 130, "label": "vues" }, { "id": 1480450730, "value": 132, "label": "vues" }, { "id": 1480450740, "value": 135, "label": "vues" }, { "id": 1480450750, "value": 135, "label": "vues" }, { "id": 1480450760, "value": 142, "label": "vues" }, { "id": 1480450770, "value": 143, "label": "vues" }, { "id": 1480450780, "value": 141, "label": "vues" }, { "id": 1480450790, "value": 143, "label": "vues" }, { "id": 1480450800, "value": 139, "label": "vues" }, { "id": 1480450810, "value": 136, "label": "vues" }, { "id": 1480450820, "value": 135, "label": "vues" }, { "id": 1480450830, "value": 133, "label": "vues" }, { "id": 1480450840, "value": 134, "label": "vues" }, { "id": 1480450850, "value": 135, "label": "vues" }, { "id": 1480450860, "value": 134, "label": "vues" }, { "id": 1480450870, "value": 142, "label": "vues" }, { "id": 1480450880, "value": 147, "label": "vues" }, { "id": 1480450890, "value": 143, "label": "vues" }, { "id": 1480450900, "value": 139, "label": "vues" }, { "id": 1480450910, "value": 141, "label": "vues" }, { "id": 1480450920, "value": 148, "label": "vues" }, { "id": 1480450930, "value": 151, "label": "vues" }, { "id": 1480450940, "value": 149, "label": "vues" }, { "id": 1480450950, "value": 152, "label": "vues" }, { "id": 1480450960, "value": 146, "label": "vues" }, { "id": 1480450970, "value": 142, "label": "vues" }, { "id": 1480450980, "value": 142, "label": "vues" }, { "id": 1480450990, "value": 138, "label": "vues" }, { "id": 1480451000, "value": 136, "label": "vues" }, { "id": 1480451010, "value": 135, "label": "vues" }, { "id": 1480451020, "value": 133, "label": "vues" }, { "id": 1480451030, "value": 134, "label": "vues" }, { "id": 1480451040, "value": 133, "label": "vues" }, { "id": 1480451050, "value": 144, "label": "vues" }, { "id": 1480451060, "value": 139, "label": "vues" }, { "id": 1480451070, "value": 133, "label": "vues" }, { "id": 1480451080, "value": 132, "label": "vues" }, { "id": 1480451090, "value": 134, "label": "vues" }, { "id": 1480451100, "value": 142, "label": "vues" }, { "id": 1480451110, "value": 142, "label": "vues" }, { "id": 1480451120, "value": 145, "label": "vues" }, { "id": 1480451130, "value": 146, "label": "vues" }, { "id": 1480451140, "value": 142, "label": "vues" }, { "id": 1480451150, "value": 141, "label": "vues" }, { "id": 1480451160, "value": 142, "label": "vues" }, { "id": 1480451170, "value": 141, "label": "vues" }, { "id": 1480451180, "value": 143, "label": "vues" }, { "id": 1480451190, "value": 145, "label": "vues" }, { "id": 1480451200, "value": 142, "label": "vues" }, { "id": 1480451210, "value": 148, "label": "vues" }, { "id": 1480451220, "value": 155, "label": "vues" }, { "id": 1480451230, "value": 157, "label": "vues" }, { "id": 1480451240, "value": 155, "label": "vues" }, { "id": 1480451250, "value": 151, "label": "vues" }, { "id": 1480451260, "value": 148, "label": "vues" }, { "id": 1480451270, "value": 151, "label": "vues" }, { "id": 1480451280, "value": 154, "label": "vues" }, { "id": 1480451290, "value": 150, "label": "vues" }, { "id": 1480451300, "value": 149, "label": "vues" }, { "id": 1480451310, "value": 150, "label": "vues" }, { "id": 1480451320, "value": 150, "label": "vues" }, { "id": 1480451330, "value": 150, "label": "vues" }, { "id": 1480451340, "value": 155, "label": "vues" }, { "id": 1480451350, "value": 161, "label": "vues" }, { "id": 1480451360, "value": 154, "label": "vues" }, { "id": 1480451370, "value": 152, "label": "vues" }, { "id": 1480451380, "value": 159, "label": "vues" }, { "id": 1480451390, "value": 151, "label": "vues" }, { "id": 1480451400, "value": 145, "label": "vues" }, { "id": 1480451410, "value": 143, "label": "vues" }, { "id": 1480451420, "value": 135, "label": "vues" }, { "id": 1480451430, "value": 139, "label": "vues" }, { "id": 1480451440, "value": 142, "label": "vues" }, { "id": 1480451450, "value": 143, "label": "vues" }, { "id": 1480451460, "value": 143, "label": "vues" }, { "id": 1480451470, "value": 140, "label": "vues" }, { "id": 1480451480, "value": 138, "label": "vues" }, { "id": 1480451490, "value": 136, "label": "vues" }, { "id": 1480451500, "value": 261, "label": "vues" }, { "id": 1480451510, "value": 404, "label": "vues" }, { "id": 1480451520, "value": 426, "label": "vues" }, { "id": 1480451530, "value": 425, "label": "vues" }, { "id": 1480451540, "value": 346, "label": "vues" }, { "id": 1480451550, "value": 204, "label": "vues" }, { "id": 1480451560, "value": 138, "label": "vues" }, { "id": 1480451570, "value": 145, "label": "vues" }, { "id": 1480451580, "value": 145, "label": "vues" }, { "id": 1480451590, "value": 141, "label": "vues" }, { "id": 1480451600, "value": 145, "label": "vues" }, { "id": 1480451610, "value": 145, "label": "vues" }, { "id": 1480451620, "value": 140, "label": "vues" }, { "id": 1480451630, "value": 113, "label": "vues" }, { "id": 1480451640, "value": 145, "label": "vues" }, { "id": 1480451650, "value": 144, "label": "vues" }, { "id": 1480451660, "value": 148, "label": "vues" }, { "id": 1480451670, "value": 148, "label": "vues" }, { "id": 1480451680, "value": 147, "label": "vues" }, { "id": 1480451690, "value": 150, "label": "vues" }, { "id": 1480451700, "value": 150, "label": "vues" }, { "id": 1480451710, "value": 157, "label": "vues" }, { "id": 1480451720, "value": 157, "label": "vues" }, { "id": 1480451730, "value": 152, "label": "vues" }, { "id": 1480451740, "value": 151, "label": "vues" }, { "id": 1480451750, "value": 156, "label": "vues" }, { "id": 1480451760, "value": 154, "label": "vues" }, { "id": 1480451770, "value": 151, "label": "vues" }, { "id": 1480451780, "value": 153, "label": "vues" }, { "id": 1480451790, "value": 151, "label": "vues" }, { "id": 1480451800, "value": 153, "label": "vues" }, { "id": 1480451810, "value": 155, "label": "vues" }, { "id": 1480451820, "value": 157, "label": "vues" }, { "id": 1480451830, "value": 157, "label": "vues" }, { "id": 1480451840, "value": 156, "label": "vues" }, { "id": 1480451850, "value": 157, "label": "vues" }, { "id": 1480451860, "value": 159, "label": "vues" }, { "id": 1480451870, "value": 155, "label": "vues" }, { "id": 1480451880, "value": 154, "label": "vues" }, { "id": 1480451890, "value": 157, "label": "vues" }, { "id": 1480451900, "value": 263, "label": "vues" }, { "id": 1480451910, "value": 429, "label": "vues" }, { "id": 1480451920, "value": 490, "label": "vues" }, { "id": 1480451930, "value": 497, "label": "vues" }, { "id": 1480451940, "value": 498, "label": "vues" }, { "id": 1480451950, "value": 502, "label": "vues" }, { "id": 1480451960, "value": 397, "label": "vues" }, { "id": 1480451970, "value": 373, "label": "vues" }, { "id": 1480451980, "value": 310, "label": "vues" }, { "id": 1480451990, "value": 162, "label": "vues" }, { "id": 1480452000, "value": 157, "label": "vues" }, { "id": 1480452010, "value": 154, "label": "vues" }, { "id": 1480452020, "value": 162, "label": "vues" }, { "id": 1480452030, "value": 159, "label": "vues" }, { "id": 1480452040, "value": 153, "label": "vues" }, { "id": 1480452050, "value": 157, "label": "vues" }, { "id": 1480452060, "value": 157, "label": "vues" }, { "id": 1480452070, "value": 160, "label": "vues" }, { "id": 1480452080, "value": 161, "label": "vues" }, { "id": 1480452090, "value": 156, "label": "vues" }, { "id": 1480452100, "value": 153, "label": "vues" }, { "id": 1480452110, "value": 153, "label": "vues" }, { "id": 1480452120, "value": 160, "label": "vues" }, { "id": 1480452130, "value": 157, "label": "vues" }, { "id": 1480452140, "value": 157, "label": "vues" }, { "id": 1480452150, "value": 160, "label": "vues" }, { "id": 1480452160, "value": 163, "label": "vues" }, { "id": 1480452170, "value": 166, "label": "vues" }, { "id": 1480452180, "value": 168, "label": "vues" }, { "id": 1480452190, "value": 163, "label": "vues" }, { "id": 1480452200, "value": 165, "label": "vues" }, { "id": 1480452210, "value": 162, "label": "vues" }, { "id": 1480452220, "value": 163, "label": "vues" }, { "id": 1480452230, "value": 163, "label": "vues" }, { "id": 1480452240, "value": 260, "label": "vues" }, { "id": 1480452250, "value": 433, "label": "vues" }, { "id": 1480452260, "value": 513, "label": "vues" }, { "id": 1480452270, "value": 514, "label": "vues" }, { "id": 1480452280, "value": 448, "label": "vues" }, { "id": 1480452290, "value": 439, "label": "vues" }, { "id": 1480452300, "value": 489, "label": "vues" }, { "id": 1480452310, "value": 428, "label": "vues" }] };

var realtime_data = realtime_views.data.map(function (e) {
  return { time: new Date(e.id * 1000), value: e.value };
});

var translations = {
  'It is a beautiful day!': 'C\'est une belle journée!',
  'The parrot ate the cake.': 'Le perroquet a mangé le gateau.',
  hello: "<a class=\"js-fb-permissions link\" data-scopes=\"email\" href=\"https://google.com\" target=\"_blank\">Bonjour"
};

var Trans = _saladUi2.default.Util.Trans.factory(translations);

var chartData = [{ time: new Date('2010-04-01'), value: 5102 }, { time: new Date('2010-04-02'), value: 22902 }, { time: new Date('2010-04-03'), value: 10052 }, { time: new Date('2010-04-04'), value: 11053 }, { time: new Date('2010-04-05'), value: 17001 }, { time: new Date('2010-04-06'), value: 21010 }];

var selectOptions = [{ name: 'tofu', value: -2, calories: 400 }, { name: 'bacon', value: -1, calories: 900 }, { name: 'roasted chicken', value: 0, calories: 600 }, { name: 'steak', value: 1, calories: 700 }];

var Demo = function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Demo)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      selectedRadio: 'radio1',
      protein: { name: null, value: null, calories: 0 },
      demoSwitch: true,
      tagsAdded: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'],
      showOverlay: false,
      videoSelected: false,
      sectionWidth: 720
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Demo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
      ga('create', 'UA-78769010-1', 'auto');
      _saladUi2.default.Lib.tracking.trackPage('SaladUI Demo');

      this.setState({ protein: selectOptions[1] });

      this.onResize = this.onResize.bind(this);
      this.onResize();
      window.addEventListener('resize', this.onResize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: 'onResize',
    value: function onResize() {
      var sectionWidth = this.refs.firstSection.getBoundingClientRect().width;
      this.setState({ sectionWidth: sectionWidth });
    }
  }, {
    key: 'handleRemoveTag',
    value: function handleRemoveTag(tag) {
      console.log('item to remove: ', tag);
      var tags = this.state.tagsAdded,
          index = this.state.tagsAdded.indexOf(tag);

      tags.splice(index, 1);
      this.setState({
        tagsAdded: tags
      });
    }
  }, {
    key: 'showOverlay',
    value: function showOverlay() {
      this.setState({
        showOverlay: true
      });
    }
  }, {
    key: 'closeOverlay',
    value: function closeOverlay() {
      this.setState({
        showOverlay: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'demo', ref: 'container' },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/dailymotion/salad-ui', target: '_blank', className: 'github-corner' },
            _react2.default.createElement(
              'svg',
              { width: '80', height: '80', viewBox: '0 0 250 250' },
              _react2.default.createElement('path', { d: 'M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z' }),
              _react2.default.createElement('path', { d: 'M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2', fill: 'currentColor', className: 'octo-arm' }),
              _react2.default.createElement('path', { d: 'M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z', fill: 'currentColor', className: 'octo-body' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'header-content' },
            _react2.default.createElement(
              'h1',
              null,
              'Salad-UI ',
              String.fromCharCode(55357, 56960)
            ),
            _react2.default.createElement(
              'h2',
              null,
              _react2.default.createElement(
                'pre',
                null,
                'npm i --save salad-ui'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'import SaladUI from \'salad-ui\''
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<SaladUI.Chart.Area/>'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://npmjs.com/package/salad-ui', target: '_blank' },
                _react2.default.createElement('img', { src: 'https://badge.fury.io/js/salad-ui.svg' })
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'Salad-UI can be enjoyed as a complete salad using ',
              _react2.default.createElement(
                'i',
                { className: 'snippet' },
                'import SaladUI from \'salad-ui\''
              ),
              ' or as its separate ingredients using ',
              _react2.default.createElement(
                'i',
                { className: 'snippet' },
                'import {Area} from \'salad-ui.chart\''
              ),
              '. You can install separate ingredients as ',
              _react2.default.createElement(
                'i',
                { className: 'snippet' },
                'npm i --save salad-ui.chart'
              ),
              '.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Salad-UI will work both in Browser and Server environment - use it in your universal apps!'
            ),
            _react2.default.createElement(
              'p',
              null,
              'For optimal old browser compatibility with SaladUI, please include the following polyfill on your page:'
            ),
            _react2.default.createElement(
              'pre',
              null,
              '<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js"></script>\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/1.0.0/fetch.min.js"></script>'
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'warning-mobile' },
          _react2.default.createElement(
            _saladUi2.default.Util.Alert,
            { type: 'error' },
            'Code snippets not shown on mobile!'
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            '1.x.x release notes'
          ),
          _react2.default.createElement(
            'ol',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'i',
                { className: 'snippet' },
                'Trans'
              ),
              ' component and translate function should now take parameters in object notation format: ',
              _react2.default.createElement(
                'i',
                { className: 'snippet' },
                '{user:{name:\'Sam\'}}'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'i',
                { className: 'snippet' },
                'f'
              ),
              ' is renamed to ',
              _react2.default.createElement(
                'i',
                { className: 'snippet' },
                'http'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              'Added a nigty formatter.render function to format templates.'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Various updates to the charts, better yLabel formatting.'
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { ref: 'firstSection' },
          _react2.default.createElement(
            'h2',
            null,
            'Chart'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'functionality' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Area'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'const chartData = [{time: new Date(\'1990-01-02\'), value: 1231}]\n\n<SaladUI.Chart.Area\n  width={900}\n  height={300}\n  labelTemplate={data=>`Cats ate ${SaladUI.Lib.formatter.formatCurrency(data.value, \'USD\')} worth of fish that day.`}\n  data={chartData} width={560}\n/>'
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_saladUi2.default.Chart.Area, {
                  width: this.state.sectionWidth,
                  height: this.state.sectionWidth * 0.6,
                  data: realtime_data,
                  labelTemplate: function labelTemplate(data) {
                    return data.value + ' views';
                  }
                  // labelTemplate={data=>`Cats ate ${SaladUI.Lib.formatter.formatCurrency(data.value, 'USD')} worth of fish that day.`}
                  // data={chartData}
                })
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Bar Metric'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<SaladUI.Chart.BarMetric\n  label={\'Cats\'}\n  percent={20}\n  value={String(20)}\n  metricName="%"\n/>'
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_saladUi2.default.Chart.BarMetric, {
                  label: 'White Cats',
                  percent: 20,
                  value: String(20),
                  metricName: '%'
                }),
                _react2.default.createElement(_saladUi2.default.Chart.BarMetric, {
                  label: 'Black Cats',
                  percent: 40,
                  value: String(40),
                  metricName: '%'
                }),
                _react2.default.createElement(_saladUi2.default.Chart.BarMetric, {
                  label: 'Other Cats',
                  percent: 40,
                  value: String(40),
                  metricName: '%'
                })
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Circle Pie'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<SaladUI.Chart.CirclePie\n  width={100}\n  height={100}\n  strokeWidth={7}\n  percent={42}\n  strokeColor="rgb(31, 207, 101)"\n  fillColor="rgb(31, 207, 101)"\n/>'
              ),
              _react2.default.createElement(
                'div',
                { style: { display: 'flex', justifyContent: 'space-around', marginTop: 40, alignItems: 'flex-end' } },
                _react2.default.createElement(_saladUi2.default.Chart.CirclePie, { width: 120, height: 120, strokeWidth: 20, percent: 49, labelColor: 'rgb(245, 210, 84)', strokeColor: 'rgb(245, 210, 84)' }),
                _react2.default.createElement(_saladUi2.default.Chart.CirclePie, { width: 160, height: 160, strokeWidth: 20, percent: 42 }),
                _react2.default.createElement(_saladUi2.default.Chart.CirclePie, { width: 200, height: 200, strokeWidth: 20, labelColor: 'rgb(31, 207, 101)', strokeColor: 'rgb(31, 207, 101)', percent: 72 }),
                _react2.default.createElement(_saladUi2.default.Chart.CirclePie, { width: 160, height: 160, strokeWidth: 20, percent: 32, labelColor: 'rgb(245, 84, 133)', strokeColor: 'rgb(245, 84, 133)' }),
                _react2.default.createElement(_saladUi2.default.Chart.CirclePie, { width: 120, height: 120, strokeWidth: 20, percent: 3, labelColor: 'rgb(169, 84, 245)', strokeColor: 'rgb(169, 84, 245)' })
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Form'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'functionality' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Autocomplete'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Autocomplete/>'
              ),
              _react2.default.createElement(_demoAutocomplete2.default, null)
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Checkbox'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Checkbox/>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Form.Checkbox,
                null,
                'This is a checkbox'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Switch'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Switch value={this.state.val} onChange={(val)=>this.setState({val})}/>'
              ),
              _react2.default.createElement(_saladUi2.default.Form.Switch, { value: this.state.demoSwitch, onChange: function onChange(demoSwitch) {
                  return _this2.setState({ demoSwitch: demoSwitch });
                } }),
              _react2.default.createElement(
                'span',
                { style: { color: '#bbb', marginLeft: 20 } },
                this.state.demoSwitch ? 'ON' : 'OFF'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Radio'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<RadioGroup/><Radio></RadioGroup>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Form.RadioGroup,
                { name: 'radiotest', onChange: function onChange(val) {
                    return _this2.setState({ selectedRadio: val });
                  }, selected: this.state.selectedRadio },
                _react2.default.createElement(
                  _saladUi2.default.Form.Radio,
                  { value: 'radio1' },
                  'This is a Radio element'
                ),
                _react2.default.createElement(
                  _saladUi2.default.Form.Radio,
                  { value: 'radio2' },
                  'This is another Radio element'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' InputText'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<InputText/><InputText textarea/>'
              ),
              _react2.default.createElement(
                'div',
                { style: { marginTop: 10 } },
                _react2.default.createElement(_saladUi2.default.Form.InputText, { prefix: 'https://dailymotion.', placeholder: 'yoursubdomain', suffix: '.com', label: 'Input with label, prefix and suffix' })
              ),
              _react2.default.createElement(
                'div',
                { style: { marginTop: 10 } },
                _react2.default.createElement(_saladUi2.default.Form.InputText, { textarea: true, label: 'Input type textarea' })
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Select'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'let options = [\n  {name: \'tofu\', value: \'tofu\', calories: 400},\n  {name: \'bacon\', value: \'bacon\', calories: 900},\n  {name: \'roasted chicken\', value: \'chicken\', calories: 600},\n  {name: \'steak\', value: \'steak\', calories: 700}\n]\n<Select\n  options={options}\n  onChange={(protein)=>this.setState({protein})}>Pick one</Select>'
              ),
              _react2.default.createElement(
                'div',
                { style: { width: 300 } },
                _react2.default.createElement(
                  _saladUi2.default.Form.Select,
                  {
                    value: this.state.protein.value,
                    options: selectOptions,
                    onChange: function onChange(protein) {
                      return _this2.setState({ protein: protein });
                    } },
                  'Pick a protein'
                ),
                _react2.default.createElement(
                  'p',
                  { style: { margin: '10px 0' } },
                  'Select without border'
                ),
                _react2.default.createElement(
                  _saladUi2.default.Form.Select,
                  {
                    options: selectOptions,
                    value: selectOptions[2].value,
                    onChange: function onChange(protein) {
                      return _this2.setState({ protein: protein });
                    },
                    noBorder: true },
                  'Borderless'
                ),
                _react2.default.createElement(
                  'p',
                  { style: { padding: 10 } },
                  'Protein: ',
                  _react2.default.createElement(
                    'b',
                    { style: { fontWeight: 'bold' } },
                    this.state.protein.value,
                    ' (',
                    this.state.protein.calories,
                    'cal)'
                  )
                ),
                _react2.default.createElement(_saladUi2.default.Form.Select, { style: { marginTop: 20 } })
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Lib'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'functionality' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' http (fetch wrapper)'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'http.get(\'https://api.dailymotion.com/user/spi0n\')\n.then(json => console.log(json))\n.catch(err => console.error(err))\n\nhttp.post(\'https://api.dailymotion.com/user/spi0n\')\nhttp.delete(\'https://api.dailymotion.com/user/spi0n\')\n\nconst api = http.apiFactory(\'https://api.dailymotion.com\', {access_token: \'abc\'})\napi.get(\'/user/spi0n\')'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' glob'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'glob.canUseDom()'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  _saladUi2.default.Lib.glob.canUseDom() ? 'true' : 'false'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' formatter.numberToString'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'formatter.numberToString(10782.123)'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  _saladUi2.default.Lib.formatter.numberToString(10782.123)
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' formatter.formatNumber'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'formatter.formatNumber(10782.123)'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  _saladUi2.default.Lib.formatter.formatNumber(10782.123)
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' formatter.currencyToSymbol'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'formatter.currencyToSymbol(\'USD\')'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  _saladUi2.default.Lib.formatter.currencyToSymbol('USD')
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' formatter.formatCurrency'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'formatter.formatCurrency(205.12, \'EUR\')'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  _saladUi2.default.Lib.formatter.formatCurrency(205.12, 'EUR')
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' formatter.render'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'formatter.render(\'{greeting}! I am {user.age} years old.\', {greeting: \'Hello\', user: {age: 32}})'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  _saladUi2.default.Lib.formatter.render('{greeting}! I am {user.age} years old.', { greeting: 'Hello', user: { age: 32 } })
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' sso'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'sso.init(SDX)\nsso.getJWT(\'revshare\').then(token => {\n  console.log(\'Yay I have a token!\')\n})'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' tracking'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'tracking.trackPage(\'SaladUI Demo\')\ntracking.trackEvent(\'eventName\', {ga: {label: \'test\'}})'
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Util'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'functionality' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Alert'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Alert type="info/error/success/warning">Hello World</Alert>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.Alert,
                { type: 'info', onClose: function onClose() {
                    return alert("don't close me!");
                  }, title: 'This is an alert.' },
                'This is the body of the alert.',
                _react2.default.createElement(
                  'div',
                  { style: { marginTop: 10 } },
                  _react2.default.createElement(
                    _saladUi2.default.Util.Button,
                    { type: 'primary' },
                    'Accept'
                  ),
                  _react2.default.createElement(
                    _saladUi2.default.Util.Button,
                    { style: { marginLeft: 10 } },
                    'Cancel'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Trans'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Trans context={{"Hello": "Bonjour"}}>Hello</Trans>\n\n//Can also be used as a plain function (to return a string instead of React Component)\n// Salad.Util.translate(key, args, [pluralform n], [translations])\nSaladUI.Util.translate(\n  \'There are {elephants} elephants in {city}.\',\n  {elephants: 24, city: "Hong Kong"},\n  24,\n  {\n    \'There are {elephants} elephants in {city}\': {\n      singular: "Il y a {elephants} elephant à {city}.",\n      plural: "Il y a {elephants} elephants à {city}.",\n    }\n  }\n)\n\n// Or as a factory passing the translations object:\nconst Trans = SaladUI.Util.Trans.factory({\n  \'It is a beautiful day!\': \'C\'est une belle journée!\'\n  \'The parrot ate the cake.\': \'Le perroquet a mangé le gateau.\'\n})\n<Trans>It is a beautiful day!</Trans>\nTrans.translate(\'The parrot ate the cake.\')'
              ),
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  _saladUi2.default.Util.Trans,
                  { context: { "Hello": "Bonjour" } },
                  'Hello'
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  _saladUi2.default.Util.translate('There are {elephants} elephants in {city}.', { elephants: 24, city: "Hong Kong" }, 24, {
                    'There are {elephants} elephants in {city}.': {
                      singular: "Il y a {elephants} éléphant à {city}.",
                      plural: "Il y a {elephants} éléphants à {city}."
                    }
                  })
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  _react2.default.createElement(
                    Trans,
                    null,
                    'It is a beautiful day!'
                  )
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  Trans.translate('The parrot ate the cake.')
                )
              ),
              Object.keys(DM_ENV).map(function (key) {
                return _react2.default.createElement(
                  'div',
                  { key: key },
                  _react2.default.createElement(
                    'h3',
                    null,
                    key
                  ),
                  Object.keys(DM_ENV[key]).map(function (sub_key) {
                    return _react2.default.createElement(
                      'p',
                      { key: sub_key },
                      _react2.default.createElement(
                        _saladUi2.default.Util.Trans,
                        { context: DM_ENV[key] },
                        sub_key
                      )
                    );
                  })
                );
              })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' TimeAndViews'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<SaladUI.Util.TimeAndViews time={new Date(\'2010-04-01\')} views={40123}/>'
              ),
              _react2.default.createElement(_saladUi2.default.Util.TimeAndViews, { time: new Date('2016-06-21'), views: 40123 })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' TextClamp'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<TextClamp>\nThis is a long long long long long long long long\nlong long long long long long long long long long\nlong long long long long long long long long long\nlong long long long long long long long long long\nlong long long long long long long long long long\nlong long long long long long text.\n</TextClamp>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.TextClamp,
                { clamp: 1 },
                'This is a long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long text.'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Button'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Button onPress={()=>alert(\'ay ay captain\')}>Press Me</Button>'
              ),
              _react2.default.createElement(
                'div',
                { style: { padding: 10 } },
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    } },
                  'Press Me'
                ),
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    }, type: 'primary', style: { marginLeft: 10 } },
                  'Type primary'
                ),
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    }, size: 'sm', style: { marginLeft: 10 } },
                  'Size small'
                )
              ),
              _react2.default.createElement(
                'div',
                { style: { padding: 10 } },
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    }, size: 'lg', mouseOverText: 'Way fatter.', isLoading: true },
                  'I am bigger.'
                ),
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    }, size: 'lg', type: 'primary', style: { backgroundColor: 'rgb(218, 33, 0)', marginLeft: 10 } },
                  'DANGER'
                ),
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    }, style: { marginLeft: 10 }, size: 'lg', type: 'success', mouseOverText: 'Unfollow' },
                  'Following'
                )
              ),
              _react2.default.createElement(
                'div',
                { style: { padding: 10 } },
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    }, fullWidth: true },
                  'I am longer.'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' ProfilePicture'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<ProfilePicture size={50}/>'
              ),
              _react2.default.createElement(_saladUi2.default.Util.ProfilePicture, null),
              _react2.default.createElement(_saladUi2.default.Util.ProfilePicture, { src: 'https://lh6.googleusercontent.com/-2lJYGtfXKwQ/AAAAAAAAAAI/AAAAAAAB15E/JDAoqjtUysE/s0-c-k-no-ns/photo.jpg' }),
              _react2.default.createElement(_saladUi2.default.Util.ProfilePicture, { src: 'http://s2.dmcdn.net/JWg8h/118x118-Os1.png' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Tag List'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<TagList items=[\'tag1\',\'tag2\',\'tag3\',\'tag4\',\'tag5\',\'tag6\']/>'
              ),
              _react2.default.createElement(_saladUi2.default.Util.TagList, {
                items: this.state.tagsAdded,
                handleRemoveItem: function handleRemoveItem(t) {
                  return _this2.handleRemoveTag(t);
                },
                handleAddItem: function handleAddItem(t) {
                  return _this2.setState({ tagsAdded: _this2.state.tagsAdded.concat(t) });
                }
              })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Badges'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<SaladUI.Util.Badge type=\'live\'>Live</SaladUI.Util.Badge>'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<SaladUI.Util.Badge type=\'verified\'></SaladUI.Util.Badge>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.Badge,
                { position: 'inline', type: 'live' },
                'Live'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.Badge,
                { position: 'inline', type: 'duration' },
                '00:23'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.Badge,
                { position: 'inline', type: 'verified' },
                _react2.default.createElement(_saladUi2.default.Icon, { type: 'check', fill: 'white', width: 12, height: 12 })
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Icon ',
            _react2.default.createElement(_saladUi2.default.Icon, { type: 'favorite', fill: 'white', width: 20, height: 20 })
          ),
          _react2.default.createElement(
            'pre',
            null,
            '<SaladUI.Icon\n    type="favorite"\n    fill="white"\n    width={20}\n    height={20}/>'
          ),
          _react2.default.createElement(
            'div',
            { className: 'icon-list' },
            _lodash2.default.map(_icon.iconTypes, function (path, icon) {
              return _react2.default.createElement(
                'span',
                { key: 'icon.' + icon, className: 'icon-item' },
                _react2.default.createElement(_saladUi2.default.Icon, { type: icon, fill: 'white' }),
                _react2.default.createElement(
                  'span',
                  { className: 'icon-title' },
                  icon
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Spinner'
          ),
          _react2.default.createElement(
            'pre',
            null,
            '<SaladUI.Spinner/>'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_saladUi2.default.Spinner, null)
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Video'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'functionality' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Preview'
              ),
              _react2.default.createElement(_saladUi2.default.Video.Preview, _extends({
                created_time: 1470415017,
                duration: 30,
                duration_formatted: "00:30",
                id: "x4neil8",
                onair: false,
                private: false,
                record_status: null,
                thumbnail_240_url: "http://s1.dmcdn.net/ZN5T3/427x240-kqC.jpg",
                title: "Some video title",
                uri: "/video/x4neil8_books-the-world-according-to-bob-the-further-adventures-of-one-man-and-his-streetwise-cat-free_news"
              }, {
                width: 240
              })),
              _react2.default.createElement(_saladUi2.default.Video.Preview, _extends({
                created_time: 1470415017,
                duration: 30,
                duration_formatted: "00:30",
                id: "x4neil8",
                onair: false,
                private: false,
                record_status: null,
                thumbnail_240_url: "http://s1.dmcdn.net/ZN5T3/427x240-kqC.jpg",
                title: "A selectable video preview",
                uri: "/video/x4neil8_books-the-world-according-to-bob-the-further-adventures-of-one-man-and-his-streetwise-cat-free_news"
              }, {
                width: 240,
                style: { marginLeft: 20 },
                selected: this.state.videoSelected,
                onSelect: function onSelect() {
                  return _this2.setState({ videoSelected: !_this2.state.videoSelected });
                }
              }))
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' List'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'class GridArea extends React.Component{\n  render(){\n    return (\n      <SaladUI.Util.Grid>\n        // The videos property is passed down from the Video.List Component\n        {\n          this.props.videos.map((video,index) =>\n            <SaladUI.Video.Preview key={`video.${index}`} type="grid" {...video}/>\n          )\n        }\n      </SaladUI.Util.Grid>\n    )\n  }\n}\n\nexport class LoadMore extends React.Component{\n  render(){\n    return (\n      // The loadMore property is passed down from the Video.List Component\n      <SaladUI.Util.Button fullWidth={true} onPress={()=>this.props.loadMore()}>\n        Load More\n      </SaladUI.Util.Button>\n    )\n  }\n}\n\n<SaladUI.Video.List\n  apiURL="https://api.dailymotion.com"\n  limit={10}\n  endpoint="/videos"\n>\n  <GridArea/>\n  <LoadMore/>\n</SaladUI.Video.List>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Video.List,
                { apiURL: 'https://api.dailymotion.com', limit: 10, endpoint: '/videos', sortBy: 'random' },
                _react2.default.createElement(videoComponents.GridArea, null),
                _react2.default.createElement(videoComponents.LoadMore, null)
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' List with Preview'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'class ListArea extends React.Component{\n    render(){\n      return (\n        <div className="video-list-area">\n          {\n            this.props.videos.map((video,index) =>\n              <SaladUI.Video.Preview key={`video.${index}`} width={220} type="list" {...video}/>\n            )\n          }\n        </div>\n      )\n    }\n  }\n<SaladUI.Video.List\n  apiURL="https://api.dailymotion.com"\n  limit={3}\n  endpoint="/videos"\n>\n  <ListArea/>\n  <LoadMore/>\n</SaladUI.Video.List>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Video.List,
                { apiURL: 'https://api.dailymotion.com', limit: 3, endpoint: '/videos', sortBy: 'random' },
                _react2.default.createElement(videoComponents.ListArea, null),
                _react2.default.createElement(videoComponents.LoadMore, null)
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Overlay'
          ),
          _react2.default.createElement(
            'pre',
            null,
            '<SaladUI.Util.Overlay\n    show=true\n    onClose={()}\n    closeButton={true}>\n    <overlayHeader style={{backgroundColor:\'blue\'}}>\n      This is the header section and the overlay\'s title\n    </overlayHeader>\n    <overlayContent>\n      This is overlay\'s content This is overlay\'s content This is overlay\'s content This is overlay\'s content\n    </overlayContent>\n    <overlayFooter>\n      <SaladUI.Util.Button onPress={()=>this.closeOverlay()} style={{marginRight: \'10px\'}}>Cancel</SaladUI.Util.Button>\n      <SaladUI.Util.Button type="primary" onPress={()=>this.closeOverlay()}>Save</SaladUI.Util.Button>\n    </overlayFooter>\n  </SaladUI.Util.Overlay>\n'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'functionality' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _saladUi2.default.Util.Button,
                { type: 'primary', onPress: function onPress() {
                    return _this2.showOverlay();
                  } },
                'Click me!'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.Overlay,
                {
                  show: this.state.showOverlay,
                  onClose: function onClose() {
                    return _this2.closeOverlay();
                  },
                  closeButton: true },
                _react2.default.createElement(
                  'overlayHeader',
                  null,
                  'This is the header section and the overlay\'s title'
                ),
                _react2.default.createElement(
                  'overlayContent',
                  null,
                  'This is overlay\'s content This is overlay\'s content This is overlay\'s content This is overlay\'s content'
                ),
                _react2.default.createElement(
                  'overlayFooter',
                  null,
                  _react2.default.createElement(
                    _saladUi2.default.Util.Button,
                    { onPress: function onPress() {
                        return _this2.closeOverlay();
                      }, style: { marginRight: '10px' } },
                    'Cancel'
                  ),
                  _react2.default.createElement(
                    _saladUi2.default.Util.Button,
                    { type: 'primary', onPress: function onPress() {
                        return _this2.closeOverlay();
                      } },
                    'Save'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Transitions'
          ),
          _react2.default.createElement(
            'pre',
            null,
            'import \'salad-ui.transitions\''
          ),
          _react2.default.createElement(
            'ul',
            { className: 'functionality' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                'Transition Duration'
              ),
              _react2.default.createElement(
                'ol',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  'transition (default transition)'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'transition-xs'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'transition-sm'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'transition-md'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'transition-lg'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'transition-xl'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                'Transition Timing'
              ),
              _react2.default.createElement(
                'ol',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  'transition-timing-linear'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'transition-timing-bezier'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'transition-timing-ease'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'transition-timing-ease-in-out'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                'Scale Effects'
              ),
              _react2.default.createElement(
                'ol',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  'scale-in-sm'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'scale-in-md'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'scale-in-lg'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'scale-in-xl'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'scale-out-sm'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'scale-out-md'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'scale-out-lg'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'scale-out-xl'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                'Fade Effects'
              ),
              _react2.default.createElement(
                'ol',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  'fade-in'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'fade-out'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'footer',
          null,
          _react2.default.createElement(
            'p',
            null,
            'Made with love at ',
            _react2.default.createElement(
              'a',
              { href: 'https://dailymotion.com' },
              'Dailymotion'
            ),
            ' in NYC.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Maintained by ',
            _react2.default.createElement(
              'a',
              { href: 'https://samueldelesque.com' },
              'Samuel Delesque'
            ),
            '.'
          )
        )
      );
    }
  }]);

  return Demo;
}(_react2.default.Component);

exports.default = Demo;