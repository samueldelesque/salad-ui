'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stylesheet = require('../../../lib/stylesheet/stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  tagBox: {
    border: '1px solid #E5E5E5',
    width: '100%',
    padding: '10px',
    margin: '20px 0',
    borderRadius: '5px'
  },

  tag: {
    display: 'inline-block',
    background: '#E5E5E5',
    margin: '0 10px 10px 0',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

exports.default = styles;