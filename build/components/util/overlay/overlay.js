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

var _glob = require('../../../lib/glob');

var _glob2 = _interopRequireDefault(_glob);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = function (_Component) {
  _inherits(Overlay, _Component);

  function Overlay() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Overlay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      responsive: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Overlay, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener("keydown", this.onClose.bind(this), false);
      if (window.innerWidth < 600) {
        this.setState({ responsive: true });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.onClose.bind(this), false);
    }
  }, {
    key: 'onClose',
    value: function onClose(e) {
      if (e.keyCode && e.keyCode != 27) return;

      this.props.onClose();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var hasTitle = false;
      var renderChildren = _react2.default.Children.map(this.props.children, function (child) {
        if (child.type === 'overlayHeader') hasTitle = true;
        var childStyles = Object.assign({}, _stylesheet2.default[child.type], child.props.style);
        return _react2.default.createElement(
          'div',
          { style: childStyles },
          child.props.children
        );
      });

      var className = 'transition ' + (this.props.show ? 'fade-in' : 'fade-out scale-out-lg');
      var overlayStyles = Object.assign({}, _stylesheet2.default.wrapper, this.state.responsive ? _stylesheet2.default.wrapperResponsive : null, this.props.show ? null : { opacity: 0, transform: 'scale(0.7)', visibility: 'hidden' });

      return _react2.default.createElement(
        'div',
        { style: overlayStyles, className: className },
        this.props.closeButton ? _react2.default.createElement(_icon2.default, {
          type: 'close',
          width: 12,
          height: 12,
          fill: hasTitle ? 'white' : 'black',
          style: { float: 'right', cursor: 'pointer', margin: '20px 20px 0 10px' },
          onClick: function onClick(e) {
            return _this2.onClose(e);
          } }) : null,
        renderChildren
      );
    }
  }]);

  return Overlay;
}(_react.Component);

exports.default = Overlay;