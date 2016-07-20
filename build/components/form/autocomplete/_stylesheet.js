'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stylesheet = require('../../../lib/stylesheet/stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  suggestions: {
    position: 'absolute',
    background: 'white',
    width: '100%',
    padding: '10px 0',
    zIndex: '999',
    boxShadow: '1px 3px 3px rgba(0, 0, 0, 0.3)'
  },

  suggItem: {
    padding: '5px 10px',
    cursor: 'pointer',
    margin: 0,
    color: 'black'
  }
};

exports.default = styles;