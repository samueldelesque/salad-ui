'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylesheet = require('./_stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputText = function (_React$Component) {
  _inherits(InputText, _React$Component);

  function InputText() {
    _classCallCheck(this, InputText);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputText).call(this));

    _this.state = {
      value: '',
      focus: false
    };

    _this.id = _this.id ? _this.id + 1 : 0;
    return _this;
  }

  _createClass(InputText, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        focus: this.props.focus,
        value: this.props.value
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.focus && !this.props.readOnly) {
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
    value: function handleClick() {
      if (this.props.onClick) {
        this.props.onClick();
      }
      // Hmmm what's the use?
      // if (this.props.selectOnClick) {
      //   e.target.select()
      // }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ value: e.target.value });
      if (this.props.onChange) {
        this.props.onChange(e.target.value);
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      this.setState({ focus: false });
      if (this.props.onBlur) {
        this.props.onBlur();
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
      var value = this.state.value ? this.state.value : this.props.value;
      var tag = this.props.textarea ? 'textarea' : 'input';
      var id = 'input.' + this.id;

      var props = {
        ref: 'input',
        type: this.props.type,
        style: Object.assign({}, _stylesheet2.default.inputContent, this.props.textarea ? _stylesheet2.default.textareaContent : null, this.props.style),
        placeholder: this.props.placeholder,
        onClick: this.handleClick.bind(this),
        onBlur: this.handleBlur.bind(this),
        onChange: this.handleChange.bind(this),
        onKeyUp: this.handleKeyUp.bind(this),
        value: value,
        id: id
      };

      return _react2.default.createElement(
        'div',
        null,
        this.props.label ? _react2.default.createElement(
          'label',
          { htmlFor: id, style: { fontSize: 14, color: '#888' } },
          this.props.label
        ) : null,
        _react2.default.createElement(
          'div',
          { style: Object.assign({}, _stylesheet2.default.inputContainer, this.props.textarea ? _stylesheet2.default.textareaContainer : null, this.props.style) },
          this.props.prefix ? _react2.default.createElement(
            'span',
            { style: Object.assign({}, _stylesheet2.default.inputContent, this.props.textarea ? _stylesheet2.default.textareaContent : null, _stylesheet2.default.inputPrefix) },
            this.props.prefix
          ) : null,
          _react2.default.createElement(tag, props, null),
          this.props.suffix ? _react2.default.createElement(
            'span',
            { style: Object.assign({}, _stylesheet2.default.inputContent, this.props.textarea ? _stylesheet2.default.textareaContent : null, _stylesheet2.default.inputPrefix) },
            this.props.suffix
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
  value: '',
  focus: false,
  prefix: false,
  suffix: false,
  error: false,
  placeholder: 'Start typing'
};
exports.default = InputText;