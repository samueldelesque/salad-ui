'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radioIcon;

var _stylesheet = require('../../../lib/stylesheet/stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  radio: {
    cursor: 'pointer',
    marginBottom: 10
  },
  radioDisabled: {
    cursor: 'not-allowed',
    color: _stylesheet.defaults.colors.gray3
  },
  radioIcon: (_radioIcon = {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '16px',
    height: '16px',
    marginRight: 20
  }, _defineProperty(_radioIcon, 'position', 'relative'), _defineProperty(_radioIcon, 'backgroundColor', _stylesheet.defaults.colors.gray5), _defineProperty(_radioIcon, 'border', 'solid 1px ' + _stylesheet.defaults.colors.gray3), _defineProperty(_radioIcon, 'borderRadius', '50%'), _radioIcon),
  radioContent: {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'middle'
  },

  disc: {
    cursor: 'pointer',
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '10px',
    height: '10px',
    zIndex: '10',
    backgroundColor: _stylesheet.defaults.colors.dmBrand,
    borderRadius: '50%'
  },
  discDisabled: {
    backgroundColor: _stylesheet.defaults.colors.gray3
  }
};

exports.default = styles;