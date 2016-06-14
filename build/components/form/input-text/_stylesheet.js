'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stylesheet = require('../../../lib/stylesheet/stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  inputStyle: {
    width: '100%',
    height: '32px',
    border: 'solid 1px ' + _stylesheet.defaults.colors.gray3,
    outline: 'none',
    borderRadius: '3px',
    backgroundColor: 'white',
    padding: '7px 0 7px 10px',
    fontSize: '14px'
  },

  textareaStyle: {
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