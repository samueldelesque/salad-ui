'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Anchor = function (_Component) {
  _inherits(Anchor, _Component);

  function Anchor() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Anchor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Anchor)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Anchor, [{
    key: 'getStyle',
    value: function getStyle() {
      if (this.props.active) {
        return Object.assign({}, this.props.style, this.props.activeStyle);
      } else if (this.state.hovered) {
        return Object.assign({}, this.props.style, this.props.hoverStyle);
      } else {
        return this.props.style;
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      if (this.props.handleClick) this.props.handleClick();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'a',
        _extends({
          onMouseOver: function onMouseOver() {
            return _this2.setState({ hovered: true });
          },
          onMouseOut: function onMouseOut() {
            return _this2.setState({ hovered: false });
          },
          onClick: function onClick(e) {
            return _this2.handleClick(e);
          }
        }, this.props, {
          style: this.getStyle() }),
        this.props.children
      );
    }
  }]);

  return Anchor;
}(_react.Component);

Anchor.defaultProps = {
  style: {
    color: '#0066DC',
    cursor: 'pointer'
  },

  activeStyle: {
    textDecoration: 'underline'
  },

  hoverStyle: {
    textDecoration: 'underline'
  }
};
exports.default = Anchor;