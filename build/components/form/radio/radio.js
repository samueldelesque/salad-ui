'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylesheet = require('./_stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio() {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Radio).apply(this, arguments));
  }

  _createClass(Radio, [{
    key: 'onChange',
    value: function onChange(val) {
      if (this.props.disabled) {
        return;
      }
      this.props.onChange && this.props.onChange(val);
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      return _react2.default.Children.map(this.props.children, function (child) {
        return typeof child === 'string' ? _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: child } }) : child;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var id = 'radio-' + this.props.name + '-' + this.props.value;
      var props = {
        name: this.props.name,
        value: this.props.value,
        id: id,
        onChange: this.onChange.bind(this),
        checked: this.props.selected
      };

      var s = _stylesheet2.default.radio;
      var ds = _stylesheet2.default.disc;
      if (this.props.disabled) {
        s = Object.assign({}, s, _stylesheet2.default.radioDisabled);
        ds = Object.assign({}, ds, _stylesheet2.default.discDisabled);
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: s, onClick: function onClick() {
              return _this2.onChange(_this2.props.value);
            } },
          _react2.default.createElement('input', _extends({ type: 'radio' }, props, { style: { display: 'none' } })),
          _react2.default.createElement(
            'div',
            { htmlFor: id },
            _react2.default.createElement(
              'div',
              { style: _stylesheet2.default.radioIcon },
              this.props.selected ? _react2.default.createElement('span', { style: ds }) : null
            ),
            _react2.default.createElement(
              'div',
              { style: _stylesheet2.default.radioContent },
              this.renderChildren()
            )
          )
        )
      );
    }
  }]);

  return Radio;
}(_react2.default.Component);

exports.default = Radio;