'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkboxIcon, _checkmark;

var _stylesheet = require('../../../lib/stylesheet/stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  checkbox: {
    display: 'inline-block',
    cursor: 'pointer'
  },
  checkboxDisabled: {
    color: _stylesheet.defaults.colors.gray3,
    cursor: 'not-allowed'
  },
  checkboxIcon: (_checkboxIcon = {
    position: 'relative',
    display: 'block',
    width: 16,
    height: 16
  }, _defineProperty(_checkboxIcon, 'position', 'relative'), _defineProperty(_checkboxIcon, 'backgroundColor', _stylesheet.defaults.colors.gray5), _defineProperty(_checkboxIcon, 'border', 'solid 1px ' + _stylesheet.defaults.colors.gray3), _defineProperty(_checkboxIcon, 'borderRadius', 3), _defineProperty(_checkboxIcon, 'float', 'left'), _defineProperty(_checkboxIcon, 'margin', '5px 10px 0 0'), _checkboxIcon),

  checkmark: (_checkmark = {
    position: 'absolute',
    width: 14,
    height: 14
  }, _defineProperty(_checkmark, 'width', 13), _defineProperty(_checkmark, 'height', 13), _defineProperty(_checkmark, 'top', 1), _defineProperty(_checkmark, 'left', 1), _defineProperty(_checkmark, 'fontSize', 12), _defineProperty(_checkmark, 'zIndex', 2), _checkmark),
  gray: _stylesheet.defaults.colors.gray3,
  blue: _stylesheet.defaults.colors.dmBrand
};

exports.default = styles;