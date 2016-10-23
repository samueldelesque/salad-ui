'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stylesheet = require('../../../lib/stylesheet/stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var itemHeight = '36px';

var styles = {
  selectBox: {
    padding: 10,
    lineHeight: 1.1,
    border: '1px solid ' + _stylesheet.defaults.colors.gray3,
    borderRadius: '3px',
    cursor: 'pointer',
    overflow: 'hidden',
    height: itemHeight,
    width: '100%'
  },

  noBorder: {
    border: 'none'
  },

  dropdownIcon: {
    position: 'absolute',
    right: '10px',
    top: '13px',
    transform: 'rotate(-90deg)'
  },

  dropdown: {
    position: 'absolute',
    background: 'white',
    zIndex: 999,
    width: '100%',
    top: 0,
    height: 280,
    overflow: 'auto',
    border: '1px solid ' + _stylesheet.defaults.colors.gray3
  },

  dropdownHidden: {
    display: 'none',
    opacity: 0,
    visibility: 'hidden'
  },

  dropdownItem: {
    margin: 0,
    padding: 10,
    lineHeight: 1.1,
    cursor: 'pointer',
    height: itemHeight,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },

  selected: {
    backgroundColor: _stylesheet.defaults.colors.gray5
  }
};

exports.default = styles;