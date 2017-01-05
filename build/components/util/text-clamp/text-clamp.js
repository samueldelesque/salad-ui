'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _clampJs = require('clamp-js');

var _clampJs2 = _interopRequireDefault(_clampJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextClamp = function (_Component) {
  _inherits(TextClamp, _Component);

  function TextClamp() {
    _classCallCheck(this, TextClamp);

    return _possibleConstructorReturn(this, (TextClamp.__proto__ || Object.getPrototypeOf(TextClamp)).apply(this, arguments));
  }

  _createClass(TextClamp, [{
    key: 'makeId',
    value: function makeId() {
      return;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var clampOptions = ['clamp', 'useNativeClamp', 'truncationChar', 'truncationHTML', 'useNativeClamp', 'splitOnChars'];
      var options = clampOptions.forEach(function (option) {
        if (_this2.props[option]) {
          clampOptions[option] = _this2.props[option];
        }
      });
      (0, _clampJs2.default)(this.text, clampOptions);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', {
        ref: function ref(_ref) {
          return _this3.text = _ref;
        },
        className: 'utils_text-clamp',
        dangerouslySetInnerHTML: { __html: this.props.children }
      });
    }
  }]);

  return TextClamp;
}(_react.Component);

TextClamp.propTypes = {
  clamp: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  splitOnChars: _react.PropTypes.array,
  useNativeClamp: _react.PropTypes.bool,
  truncationChar: _react.PropTypes.string
};
TextClamp.defaultProps = {
  useNativeClamp: false
};
exports.default = TextClamp;