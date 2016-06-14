'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../../icon/icon');

var _icon2 = _interopRequireDefault(_icon);

var _stylesheet = require('./_stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alert = function (_Component) {
  _inherits(Alert, _Component);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Alert).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      var _context;

      _stylesheet2.default.alertBox.backgroundColor = _stylesheet2.default.colorMap[this.props.type];
      return _react2.default.createElement(
        'div',
        { style: _stylesheet2.default.alertBox },
        _react2.default.createElement(
          'div',
          { style: _stylesheet2.default.alertIcon },
          _react2.default.createElement(_icon2.default, { width: 18, height: 18, type: this.props.type, style: { alignSelf: 'center' } })
        ),
        _react2.default.createElement(
          'div',
          { style: { marginRight: 5 } },
          this.props.title ? _react2.default.createElement(
            'p',
            { style: _stylesheet2.default.title },
            this.props.title
          ) : null,
          this.props.children
        ),
        this.props.onClose ? _react2.default.createElement(
          'div',
          { style: _stylesheet2.default.closeBtn },
          _react2.default.createElement(_icon2.default, { width: 10, height: 10, type: 'close', onClick: (_context = this.props).onClose.bind(_context), style: { alignSelf: 'center' } })
        ) : null
      );
    }
  }]);

  return Alert;
}(_react.Component);

Alert.defaultProps = {
  title: false,
  type: 'info',
  onClose: false
};
exports.default = Alert;