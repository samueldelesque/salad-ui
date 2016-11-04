'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var currencyToSymbol = exports.currencyToSymbol = function currencyToSymbol(cur) {
  switch (cur) {
    case 'EUR':
      return '€';
      break;
    default:
      return '$';
  }
};

var formatCurrency = exports.formatCurrency = function formatCurrency(amt) {
  var currency = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  if (amt === null || amt === '') return;
  if (typeof amt !== 'number') amt = parseFloat(amt);
  amt = amt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  return currencyToSymbol(currency) + ' ' + amt;
};

var formatNumber = exports.formatNumber = function formatNumber(num) {
  var numberString = num.toString();
  var numberParts = numberString.split('.');
  var n = numberParts[0] + (numberParts[1] ? '.' + numberParts[1].slice(0, 2) : '');
  return n.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

var numberToString = exports.numberToString = function numberToString(value) {
  var n = parseFloat(value);
  if (isNaN(n)) return value;
  if (n > 1000000000) return Math.round(n / 100000000) / 10 + 'B';
  if (n > 10000000) return Math.round(n / 1000000) + 'M';
  if (n > 1000000) return Math.round(n / 100000) / 10 + 'M';
  if (n > 10000) return Math.round(n / 1000) + 'K';
  if (n > 1000) return Math.round(n / 100) / 10 + 'K';
  return Math.round(n * 100) / 100;
};