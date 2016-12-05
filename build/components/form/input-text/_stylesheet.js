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
    border: 'solid 1px ' + _stylesheet.defaults.colors.gray3,
    backgroundColor: 'white',
    borderRadius: '3px',
    display: 'flex'
  },

  textareaContainer: {
    height: '96px'
  },

  inputPrefix: {
    display: 'inline-block',
    flex: -1,
    backgroundColor: _stylesheet.defaults.colors.gray3,
    paddingRight: 10,
    color: 'white',
    lineHeight: 1
  },

  inputContent: {
    outline: 'none',
    backgroundColor: 'transparent',
    flex: 1,
    border: 'none',
    padding: '8px 10px',
    fontSize: 'inherit'
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