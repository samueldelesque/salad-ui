'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _stylesheet = require('./_stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputText = function (_React$Component) {
  _inherits(InputText, _React$Component);

  function InputText() {
    _classCallCheck(this, InputText);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputText).apply(this, arguments));
  }

  _createClass(InputText, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.focus && !this.props.readOnly) {
        this.focusInput();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ value: nextProps.value });
      if (nextProps.focus !== this.props.focus) {
        this.setState({
          focus: nextProps.focus
        });
        if (nextProps.focus === true) {
          this.focusInput();
        }
      }
    }
  }, {
    key: 'moveCursorToEnd',
    value: function moveCursorToEnd(el) {
      if (typeof el.selectionStart == "number") {
        el.selectionStart = el.selectionEnd = el.value.length;
      } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(false);
        range.select();
      }
    }
  }, {
    key: 'focusInput',
    value: function focusInput() {
      this.refs.input.focus();
      this.moveCursorToEnd(input);
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(e) {
      if (this.props.onKeyUp) {
        this.props.onKeyUp(e);
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      if (this.props.onClick) {
        this.props.onClick(e);
      }
      if (this.props.selectOnClick) {
        e.target.select();
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      if (this.props.onChange) {
        this.props.onChange(e.target.value);
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {
      this.setState({ focus: false });
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'getHint',
    value: function getHint() {
      if (this.props.hint) {
        return this.props.hint;
      }

      if (this.props.maxLength) {
        return this.state.value.length + '/' + this.props.maxLength + ' characters';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var hint = this.getHint();
      var showHint = hint && !this.props.disabled && !this.props.readOnly;
      var tag = this.props.textarea ? 'textarea' : 'input';
      var _props = this.props;
      var prefix = _props.prefix;
      var suffix = _props.suffix;
      var style = _props.style;
      var value = _props.value;

      var otherProps = _objectWithoutProperties(_props, ['prefix', 'suffix', 'style', 'value']);

      var props = _extends({
        ref: 'input',
        type: this.props.type,
        style: Object.assign({}, _stylesheet2.default.inputContent, this.props.textarea ? _stylesheet2.default.textareaContent : null, style),
        placeholder: this.props.placeholder,
        onClick: this.handleClick.bind(this),
        onBlur: this.handleBlur.bind(this),
        onChange: this.handleChange.bind(this),
        onKeyUp: this.handleKeyUp.bind(this)
      }, otherProps);

      return _react2.default.createElement(
        'div',
        null,
        this.props.label ? _react2.default.createElement(
          'label',
          { style: { fontSize: 14, color: '#888' } },
          this.props.label
        ) : null,
        _react2.default.createElement(
          'div',
          { style: Object.assign({}, _stylesheet2.default.inputContainer, this.props.textarea ? _stylesheet2.default.textareaContainer : null, this.props.style) },
          prefix ? _react2.default.createElement(
            'span',
            { style: Object.assign({}, _stylesheet2.default.inputContent, this.props.textarea ? _stylesheet2.default.textareaContent : null, _stylesheet2.default.inputPrefix) },
            prefix
          ) : null,
          _react2.default.createElement(tag, props, null),
          suffix ? _react2.default.createElement(
            'span',
            { style: Object.assign({}, _stylesheet2.default.inputContent, this.props.textarea ? _stylesheet2.default.textareaContent : null, _stylesheet2.default.inputPrefix) },
            suffix
          ) : null,
          this.props.onClear && value && _react2.default.createElement('i', { className: 'icon-close', onClick: this.props.onClear })
        ),
        showHint && !this.props.error ? _react2.default.createElement(
          'div',
          { style: _stylesheet2.default.inputError },
          hint
        ) : null,
        this.props.error ? _react2.default.createElement(
          'div',
          { style: _stylesheet2.default.inputError },
          this.props.error
        ) : null
      );
    }
  }]);

  return InputText;
}(_react2.default.Component);

InputText.defaultProps = {
  textarea: false,
  type: 'text',
  style: {},
  focus: false,
  prefix: false,
  suffix: false,
  error: false,
  placeholder: 'Start typing'
};
exports.default = InputText;