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

  if (!amt) return '';
  if (typeof amt !== 'number') amt = parseFloat(amt);
  amt = amt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  return currencyToSymbol(currency) + ' ' + amt;
};

var formatNumber = exports.formatNumber = function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

var numberToString = exports.numberToString = function numberToString(value) {
  if (typeof value !== 'number') return value;
  if (value > 1000000000) return Math.round(value / 100000000) / 10 + 'B';
  if (value > 10000000) return Math.round(value / 1000000) + 'M';
  if (value > 1000000) return Math.round(value / 100000) / 10 + 'M';
  if (value > 10000) return Math.round(value / 1000) + 'K';
  if (value > 1000) return Math.round(value / 100) / 10 + 'K';
  return Math.round(value * 100) / 100;
};