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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Checkbox)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      checked: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Checkbox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ checked: this.props.checked });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ checked: nextProps.checked });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(value) {
      this.setState({ checked: value });

      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }, {
    key: 'toggleState',
    value: function toggleState() {
      if (this.props.disabled) {
        return;
      } else {
        this.setState({ checked: !this.state.checked });
        this.handleChange(!this.state.checked);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var checkboxStyle = Object.assign({}, _stylesheet2.default.checkbox, this.props.disabled ? _stylesheet2.default.checkboxDisabled : null, this.props.style);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { onClick: this.toggleState.bind(this), style: checkboxStyle },
          _react2.default.createElement(
            'i',
            { style: _stylesheet2.default.checkboxIcon },
            this.state.checked ? _react2.default.createElement(_icon2.default, _defineProperty({
              onClick: this.toggleState.bind(this),
              type: 'check',
              fill: this.props.disabled ? _stylesheet2.default.gray : _stylesheet2.default.blue,
              style: _stylesheet2.default.checkmark,
              width: _stylesheet2.default.checkmark.width,
              height: _stylesheet2.default.checkmark.height
            }, 'fill', this.props.disabled ? '#BFBFBF' : '#0066DC')) : null
          ),
          this.props.children ? _react2.default.createElement(
            'div',
            { style: { display: 'block', overflow: 'hidden' } },
            this.props.children
          ) : null
        )
      );
    }
  }]);

  return Checkbox;
}(_react.Component);

Checkbox.defaultProps = {
  checked: false,
  style: null
};
exports.default = Checkbox;