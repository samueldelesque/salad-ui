'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = currencyToSymbol;
function currencyToSymbol(cur) {
  switch (cur) {
    case 'EUR':
      return '€';
      break;
    default:
      return '$';
  }
}