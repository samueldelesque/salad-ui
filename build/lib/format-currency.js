'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatCurrency;

var _currencyToSymbol = require('./currency-to-symbol');

var _currencyToSymbol2 = _interopRequireDefault(_currencyToSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatCurrency(amt) {
  var currency = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  if (!amt) return '';
  if (typeof amt !== 'number') amt = parseFloat(amt);
  amt = amt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  return (0, _currencyToSymbol2.default)(currency) + ' ' + amt;
}