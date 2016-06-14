'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash.merge');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _defaults = {
  colors: {
    dmBrand: '#0066dc',
    dmBrandLight: '#408ae5',
    dmBrandDark: '#004dbf',
    dmGamesBrand: '#42AEDC',
    trendingWtw: '#00BFBF',

    gray1: '#404040',
    gray2: '#7F7F7F',
    gray3: '#BFBFBF',
    gray4: '#E5E5E5',
    gray5: '#F5F5F5',
    yellow: '#FFC800',
    orange: '#FF8200',
    purple: '#6F2872',
    red: '#FF003C',
    green: '#00C832',

    /// Social Colors
    twitterColor: '#55ACEE',
    facebookColor: '#3B5998',
    instagramColor: '#517FA4',
    googleColor: '#DD4B39',
    pinterestColor: '#CC2127',
    myspaceColor: '#313131',
    soundcloudColor: '#F8630E',
    tumblrColor: '#36465D',
    itunesColor: '#656565',
    rssColor: '#FFA500'
  },

  padding: {
    sm: 10,
    md: 20,
    lg: 30
  }
};

exports.defaults = _defaults;

var StyleSheet = function () {
  function StyleSheet() {
    _classCallCheck(this, StyleSheet);
  }

  _createClass(StyleSheet, null, [{
    key: 'create',
    value: function create(sheet) {
      // Do something fancy like vendor prefix etc.
      return sheet;
    }
  }, {
    key: 'all',
    value: function all() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _lodash2.default.apply(undefined, _toConsumableArray(args.slice().reverse()));
    }
  }, {
    key: 'defaults',
    value: function defaults(newDefaults) {
      if (!newDefaults) return _defaults;
      return exports.defaults = _defaults = (0, _lodash2.default)(_defaults, newDefaults);
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;