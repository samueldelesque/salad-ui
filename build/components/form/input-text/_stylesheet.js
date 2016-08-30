'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stylesheet = require('../../../lib/stylesheet/stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  inputContainer: {
    width: '100%',
    height: '36px',
    border: 'solid 1px ' + _stylesheet.defaults.colors.gray3,
    borderRadius: '3px',
    backgroundColor: 'white',
    fontSize: '14px',
    display: 'flex'
  },

  textareaContainer: {
    height: '96px'
  },

  inputPrefix: {
    flex: -1,
    backgroundColor: _stylesheet.defaults.colors.gray3,
    paddingRight: 10,
    color: 'white'
  },

  inputContent: {
    outline: 'none',
    backgroundColor: 'transparent',
    flex: 1,
    border: 'none',
    padding: '7px 0 7px 10px',
    fontSize: '14px'
  },

  textareaContent: {
    resize: 'none',
    height: '96px'
  },

  inputError: {
    float: 'right',
    whiteSpace: 'no-wrap',
    textAlign: 'right',
    fontSize: '13px',
    color: _stylesheet.defaults.colors.red
  }
};

exports.default = styles;