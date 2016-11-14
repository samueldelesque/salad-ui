'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormatNumber = function (_Component) {
  _inherits(FormatNumber, _Component);

  function FormatNumber() {
    _classCallCheck(this, FormatNumber);

    return _possibleConstructorReturn(this, (FormatNumber.__proto__ || Object.getPrototypeOf(FormatNumber)).apply(this, arguments));
  }

  _createClass(FormatNumber, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)('utils_format-number', this.props.className) },
        (0, _numeral2.default)(this.props.value).format(this.props.short ? this.shortFormat : this.defaultFormat)
      );
    }
  }]);

  return FormatNumber;
}(_react.Component);

FormatNumber.defaultFormat = '0,0';
FormatNumber.shortFormat = '0[.]0a';
FormatNumber.defaultProps = {
  value: 0,
  short: false
};
exports.default = FormatNumber;