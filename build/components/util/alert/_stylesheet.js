'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stylesheet = require('../../../lib/stylesheet/stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  alertBox: {
    padding: '15px 20px',
    fontSize: '14px',
    display: 'flex'
  },

  alertIcon: {
    marginRight: '15px',
    display: 'flex'
  },

  title: {
    fontSize: '18px',
    marginBottom: '5px'
  },

  closeBtn: {
    marginLeft: 'auto',
    cursor: 'pointer',
    display: 'flex'
  },

  colorMap: {
    info: '#ebf4ff',
    error: '#fff0f3',
    warning: '#fff3e5',
    success: '#e2ffe9'
  }
};

exports.default = _stylesheet2.default.all(styles);