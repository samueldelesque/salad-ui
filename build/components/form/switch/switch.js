'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Switch).apply(this, arguments));
  }

  _createClass(Switch, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { style: {
            position: 'relative',
            display: 'inline-block',
            width: this.props.width,
            height: this.props.height,
            lineHeight: this.props.lineHeight,
            verticalAlign: 'middle',
            borderRadius: this.props.borderRadius,
            border: this.props.border,
            backgroundColor: this.props.value ? this.props.backgroundColorActive : this.props.backgroundColorPassive,
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.35, 0, 0.25, 1)'
          }, onClick: function onClick() {
            return _this2.props.onChange(!_this2.props.value);
          } },
        _react2.default.createElement('span', { style: Object.assign({}, {
            position: 'absolute',
            width: this.props.switchSize,
            height: this.props.switchSize,
            top: 1,
            borderRadius: '50% 50%',
            backgroundColor: this.props.switchColor,
            cursor: 'pointer',
            boxShadow: this.props.switchBoxShadow,
            transition: 'all 0.3s cubic-bezier(0.35, 0, 0.25, 1)'
          }, this.props.value ? {
            left: '100%',
            marginLeft: -20
          } : {
            left: 2
          }) })
      );
    }
  }]);

  return Switch;
}(_react2.default.Component);

Switch.defaultProps = {
  onChange: function onChange() {},
  value: true,
  backgroundColorActive: '#0066DC',
  backgroundColorPassive: '#ccc',
  switchColor: '#fff',
  switchBoxShadow: '0 2px 5px rgba(0,0,0,.4)',
  width: 34,
  height: 20,
  switchSize: 18,
  lineHeight: 20,
  borderRadius: 20,
  border: 'none'
};
exports.default = Switch;