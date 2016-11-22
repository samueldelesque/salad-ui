'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pluralType = exports.pluralTypeName = exports.langToTypeMap = exports.pluralTypes = exports.pluralTypeToLanguages = exports.translate = exports.PLURAL_TYPE = exports.LANG = exports.DEBUG = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _sprintfJs = require('sprintf-js');

var _formatter = require('../../../lib/formatter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEBUG = exports.DEBUG = false;
var LANG = exports.LANG = 'en';
var PLURAL_TYPE = exports.PLURAL_TYPE = 'german';
var DEPRECATION_WARNING_SHOWED = false;
var HIGHLIGHT_TRANSLATIONS = false;

var transRefs = {};

var Trans = function (_React$Component) {
  _inherits(Trans, _React$Component);

  function Trans() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Trans);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Trans)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Trans, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.transRefsKey = 'transRefs.' + Math.random() + Date.now();
      transRefs[this.transRefsKey] = this;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      delete transRefs[this.transRefsKey];
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = HIGHLIGHT_TRANSLATIONS ? { background: "rgb(23, 80, 167)", color: "white", padding: '0 2px' } : {};
      var translation = translate(this.props.key || this.props.children, this.props, parseFloat(this.props.n || 1), this.trans || this.props.trans || this.props.context);
      var content = HIGHLIGHT_TRANSLATIONS ? (this.props.key || this.props.children) + ' (' + LANG + ')' : translation;
      return _react2.default.createElement('span', { style: styles, dangerouslySetInnerHTML: {
          __html: content
        } });
    }
  }]);

  return Trans;
}(_react2.default.Component);

Trans.defaultProps = {
  closeLink: '</a>',
  newLine: '<br/>'
};

Trans.translate = function () {
  return translate.apply(undefined, arguments);
};

Trans.enableDebug = function () {
  var enable = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
  return exports.DEBUG = DEBUG = !!enable;
};

Trans.enableHighlight = function () {
  var enable = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

  HIGHLIGHT_TRANSLATIONS = !!enable;
  Object.keys(transRefs).map(function (key) {
    return transRefs[key].forceUpdate();
  });
};

Trans.setLang = function () {
  var locale = arguments.length <= 0 || arguments[0] === undefined ? 'en' : arguments[0];

  exports.LANG = LANG = locale;
  exports.PLURAL_TYPE = PLURAL_TYPE = pluralTypeName(locale);
};

Trans.factory = function (translations) {
  var _class, _temp3, _initialiseProps2;

  return _temp3 = _class = function (_Trans) {
    _inherits(T, _Trans);

    function T() {
      var _Object$getPrototypeO2;

      var _temp2, _this2, _ret2;

      _classCallCheck(this, T);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(T)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this2), _initialiseProps2.call(_this2), _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    return T;
  }(Trans), _class.translate = function (key, args, pluralForm) {
    return translate(key, args, pluralForm, translations);
  }, _initialiseProps2 = function _initialiseProps2() {
    this.trans = translations;
  }, _temp3;
};

var _initialiseProps = function _initialiseProps() {
  this.allowedElements = ['a', 'b', 'i', 'p', 'span', 'br', 'img'];
};

exports.default = Trans;


var unsafeTranslate = function unsafeTranslate(key, args, pluralForm, trans) {
  if (trans && trans[key]) key = trans[key];else {
    if (DEBUG) console.warn('%s is not in translated keys', key, ' - context was ', trans);
  }
  if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object' && typeof key['singular'] !== 'undefined') {
    if (pluralForm === 0 && key['singular']) {
      return unsafeTranslate(key['singular'], args, pluralForm, trans);
    } else if (pluralForm >= 1 && key['plural']) {
      return unsafeTranslate(key['plural'], args, pluralForm, trans);
    }
  } else if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object' && typeof key[pluralForm] === 'string') {
    return unsafeTranslate(key[pluralForm], args, pluralForm, trans);
  }
  var replacements = {};
  Object.keys(args).forEach(function (key) {
    return replacements[key] = _react2.default.isValidElement(args[key]) ? _server2.default.renderToString(args[key]) : args[key];
  });
  var formatted = key;
  if (key.match(/\%\([^\)]+\)/g)) {
    formatted = (0, _sprintfJs.sprintf)(key, replacements);
    if (formatted !== key && !DEPRECATION_WARNING_SHOWED) {
      console.warn('SaladUI: DEPRECATION WARNING - translate() called with legacy sprintf format! Please upgrade translation keys. https://salad-ui.com', key);
      DEPRECATION_WARNING_SHOWED = true;
    }
  } else {
    formatted = (0, _formatter.render)(key, replacements);
  }
  return formatted;
};

var translate = exports.translate = function translate(key) {
  var args = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var n = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
  var trans = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

  var translation = key;
  if ((typeof n === 'undefined' ? 'undefined' : _typeof(n)) === 'object') {
    trans = n;n = 1;
  }
  try {
    var pluralForm = pluralType(n);
    translation = unsafeTranslate(key, args, pluralForm, trans);
  } catch (e) {
    console.warn('Failed to produce translation of ', key, e);
  }
  return translation;
};

var pluralTypeToLanguages = exports.pluralTypeToLanguages = {
  chinese: ['fa', 'id', 'ja', 'ko', 'lo', 'ms', 'th', 'tr', 'zh'],
  german: ['da', 'de', 'en', 'es', 'fi', 'el', 'he', 'hu', 'it', 'nl', 'no', 'pt', 'sv'],
  french: ['fr', 'tl', 'pt-br'],
  russian: ['hr', 'ru'],
  czech: ['cs'],
  polish: ['pl'],
  icelandic: ['is']
};

/*
 * Inspired By
 * (c) 2012-2016 Airbnb, Inc.
 * http://airbnb.io/polyglot.js/polyglot.html
 */

var pluralTypes = exports.pluralTypes = {
  chinese: function chinese(n) {
    return 0;
  },
  german: function german(n) {
    return n !== 1 ? 1 : 0;
  },
  french: function french(n) {
    return n > 1 ? 1 : 0;
  },
  russian: function russian(n) {
    return n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
  },
  czech: function czech(n) {
    return n === 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;
  },
  polish: function polish(n) {
    return n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
  },
  icelandic: function icelandic(n) {
    return n % 10 !== 1 || n % 100 === 11 ? 1 : 0;
  }
};
var langToTypeMap = exports.langToTypeMap = function langToTypeMap(mapping) {
  var type = void 0,
      langs = void 0,
      l = void 0,
      ret = {};
  for (type in mapping) {
    if (mapping.hasOwnProperty(type)) {
      langs = mapping[type];
      for (l in langs) {
        ret[langs[l]] = type;
      }
    }
  }
  return ret;
};
var pluralTypeName = exports.pluralTypeName = function pluralTypeName(locale) {
  var langToPluralType = langToTypeMap(pluralTypeToLanguages);
  return langToPluralType[locale] || langToPluralType.en;
};
var pluralType = exports.pluralType = function pluralType() {
  var n = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
  return pluralTypes[PLURAL_TYPE](n);
};