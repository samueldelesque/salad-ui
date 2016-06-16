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

var Toggle = function (_Component) {
  _inherits(Toggle, _Component);

  function Toggle() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Toggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Toggle)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      selectedIndex: 0,
      cursorStyle: {},
      value: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toggle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ selectedIndex: this.props.selectedIndex, value: this.props.data[this.props.selectedIndex].value });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.select(this.state.selectedIndex);
    }
  }, {
    key: 'select',
    value: function select(index) {
      this.setState({
        selectedIndex: index,
        cursorStyle: this.getCursorStyle(index),
        value: this.props.data[index].value,
        off: this.props.data[index].off
      });
      this.props.onChange(this.props.data[index].value);
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.select(this.state.selectedIndex === 1 ? 0 : 1);
    }
  }, {
    key: 'getCursorStyle',
    value: function getCursorStyle(index) {
      index = index === 1 ? 0 : 1;
      var selected = this.refs['choice-' + index];

      return { left: selected.offsetLeft, width: selected.offsetWidth };
    }
  }, {
    key: 'render',
    value: function render() {
      var data0 = this.props.data[0];
      var data1 = this.props.data[1];
      var className = this.props.className + ' ' + (this.state.off ? 'form_toggle--off' : '');

      return _react2.default.createElement(
        'div',
        { className: 'form_toggle ' + className, onClick: this.handleClick.bind(this) },
        _react2.default.createElement(
          'span',
          { ref: 'choice-0', className: 'form_toggle__choice' },
          data0.label
        ),
        _react2.default.createElement(
          'span',
          { ref: 'choice-1', className: 'form_toggle__choice' },
          data1.label
        ),
        _react2.default.createElement('div', { className: 'form_toggle__slider', style: this.state.cursorStyle }),
        _react2.default.createElement('input', { ref: 'input', type: 'hidden', name: this.props.name, value: this.state.value })
      );
    }
  }]);

  return Toggle;
}(_react.Component);

Toggle.defaultProps = {
  data: [{ label: 'on', value: 'on' }, { label: 'off', value: 'off' }],
  selectedIndex: 0,
  onChange: function onChange() {},
  className: ''
};
Toggle.propTypes = {
  data: _react.PropTypes.array.isRequired,
  selectedIndex: _react.PropTypes.number,
  onChange: _react.PropTypes.func,
  className: _react.PropTypes.string
};
Toggle.contextTypes = {
  router: _react.PropTypes.func
};
exports.default = Toggle;