'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inputText = require('../input-text/input-text');

var _inputText2 = _interopRequireDefault(_inputText);

var _stylesheet = require('./_stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Autocomplete = function (_Component) {
  _inherits(Autocomplete, _Component);

  function Autocomplete() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Autocomplete);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Autocomplete)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      inputText: '',
      typedText: '',
      currentIndex: -1,
      showSuggestions: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Autocomplete, [{
    key: 'closeAutocomplete',
    value: function closeAutocomplete(e) {
      if (e.target.className === 'ac_input') {
        return;
      }
      if (this.state.showSuggestions) {
        this.setState({
          showSuggestions: false
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      document.addEventListener('click', function (e) {
        return _this2.closeAutocomplete(e);
      }, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      document.removeEventListener('click', function (e) {
        return _this3.closeAutocomplete(e);
      }, false);
    }
  }, {
    key: 'handleInputClick',
    value: function handleInputClick(e) {
      if (this.props.suggestions.length > 0 && this.state.inputText !== '') {
        this.setState({
          showSuggestions: true
        });
      }
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(value) {
      var _this4 = this;

      if (this.timer) {
        clearTimeout(this.timer);
      }

      if (value !== '') {
        this.timer = setTimeout(function () {
          _this4.props.requestSuggestions(value);
          _this4.setState({
            showSuggestions: true
          });
        }, this.props.latency);
      } else {
        this.setState({
          showSuggestions: false
        });
      }

      this.setState({
        inputText: value,
        typedText: value,
        currentIndex: -1
      });
    }
  }, {
    key: 'handleInputKeyUp',
    value: function handleInputKeyUp(e) {
      var UP = 38,
          DOWN = 40,
          ENTER = 13,
          nextIndex = -1;

      switch (e.which) {

        case ENTER:
          if (this.timer) clearTimeout(this.timer);
          // Try to find selected item from index
          // otherwise return textbox text
          if (this.props.allowCustomText) this.onSelect(this.props.suggestions[this.state.currentIndex] || e.target.value);else this.onSelect(this.props.suggestions[this.state.currentIndex]);
          break;

        case DOWN:
          if (!this.state.showSuggestions) {
            return;
          }
          nextIndex = this.state.currentIndex + 1;

          if (nextIndex >= this.props.suggestions.length) {
            return;
          }

          this.setState({
            currentIndex: nextIndex,
            inputText: this.extractTextFromSelection(nextIndex)
          });
          break;

        case UP:
          if (!this.state.showSuggestions) {
            return;
          }
          nextIndex = this.state.currentIndex - 1;

          if (nextIndex < 0) {
            this.setState({
              inputText: this.state.typedText,
              currentIndex: -1
            });
          } else {
            this.setState({
              currentIndex: nextIndex,
              inputText: this.extractTextFromSelection(nextIndex)
            });
          }
          break;

        default:
          break;

      }
    }
  }, {
    key: 'extractTextFromSelection',
    value: function extractTextFromSelection(index) {
      var text = this.props.suggestions[index];
      if ((typeof text === 'undefined' ? 'undefined' : _typeof(text)) === 'object' && this.props.suggestionTextKey) {
        text = text[this.props.suggestionTextKey];
      }
      return text;
    }
  }, {
    key: 'onSelect',
    value: function onSelect(item) {
      var text = item;
      if (this.state.currentIndex !== -1) {
        text = this.extractTextFromSelection(this.state.currentIndex);
      }
      if (!text || text === '') {
        return;
      }

      this.setState({
        inputText: this.props.clearOnSelect ? '' : text,
        showSuggestions: false
      });

      if (this.props.handleSelectItem) {
        this.props.handleSelectItem(item, this.state.currentIndex);
      }

      if (this.props.clearOnSelect) {
        this.refs.inputBox.refs.input.focus();
      } else {
        this.refs.inputBox.refs.input.blur();
      }
    }
  }, {
    key: 'renderSuggestions',
    value: function renderSuggestions() {
      var _this5 = this;

      var items = void 0;
      var activeStyle = Object.assign({}, _stylesheet2.default.suggItem, { background: '#E5E5E5' });
      items = this.props.suggestions.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          {
            key: 'suggestion.' + index,
            onMouseEnter: function onMouseEnter(e) {
              return _this5.setState({ currentIndex: index });
            },
            onClick: function onClick() {
              return _this5.onSelect(item);
            },
            style: _this5.state.currentIndex === index ? activeStyle : _stylesheet2.default.suggItem },
          (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !_react2.default.Component.isPrototypeOf(item) ? _this5.extractTextFromSelection(index) : item
        );
      }, this);

      return _react2.default.createElement(
        'ul',
        { style: _stylesheet2.default.suggestions },
        items
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.suggestions.length > 0 && _typeof(this.props.suggestions[0]) === 'object' && !this.props.suggestionTextKey) {
        console.error('No suggestionTextKey provided to Autocomplete!');
      }

      var inputProps = {
        placeholder: this.props.inputPlaceholder,
        value: this.state.inputText,
        style: this.props.style,
        //onBlur: ()=>setTimeout(()=>this.setState({showSuggestions: false}), 50),
        onClick: this.handleInputClick.bind(this),
        onChange: this.handleInputChange.bind(this),
        onKeyUp: this.handleInputKeyUp.bind(this)
      };

      if (this.props.apiError && this.state.inputText === '') {
        inputProps['error'] = this.props.apiError;
      }

      return _react2.default.createElement(
        'div',
        { style: { position: 'relative' } },
        _react2.default.createElement(_inputText2.default, _extends({ ref: 'inputBox' }, inputProps)),
        this.state.showSuggestions && !this.props.isLoading && this.props.suggestions.length > 0 ? this.renderSuggestions() : null
      );
    }
  }]);

  return Autocomplete;
}(_react.Component);

Autocomplete.propTypes = {
  inputPlaceholder: _react2.default.PropTypes.string,
  noSuggestionsText: _react2.default.PropTypes.string,
  isLoading: _react2.default.PropTypes.bool,
  clearOnSelect: _react2.default.PropTypes.bool,
  latency: _react2.default.PropTypes.number,
  limit: _react2.default.PropTypes.number,
  style: _react2.default.PropTypes.object,
  suggestions: _react2.default.PropTypes.array,
  handleSelectItem: _react2.default.PropTypes.func.isRequired,
  requestSuggestions: _react2.default.PropTypes.func.isRequired
};
Autocomplete.defaultProps = {
  latency: 300,
  limit: 15,
  style: {},
  inputPlaceholder: 'Start typing',
  noSuggestionsText: 'No results',
  allowCustomText: true,
  isLoading: false,
  clearOnSelect: false,
  suggestions: []
};
exports.default = Autocomplete;