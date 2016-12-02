'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var currencyToSymbol = exports.currencyToSymbol = function currencyToSymbol(cur) {
  switch (cur) {
    case 'EUR':
      return '€';
    case 'DKK':
      return 'kr';
    case 'GBP':
      return '£';
    case 'USD':
    default:
      return '$';
  }
};

var formatCurrency = exports.formatCurrency = function formatCurrency(amt) {
  var currency = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  if (amt === null || amt === '') return;
  if (typeof amt !== 'number') amt = parseFloat(amt);
  amt = amt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  var symbol = currencyToSymbol(currency);
  switch (currency) {
    case 'EUR':
      // €12.01
      return '' + symbol + amt;
    case 'DKK':
      // kr12.01
      return '' + symbol + amt;
    case 'USD':
    default:
      // $12.01
      return '' + symbol + amt;
  }
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

/*
 * Returns a natural language version of an array iteration.
 * ex: ['Ben', 'Arjune', 'Devin', 'Sam'] ==> Ben, Arjune, Devin and Sam
 *
 * also accepts objects as items, given a key_parts implementation
 * ex: [{name: 'Sam'}, {name: 'Benoit'}] ==> Sam and Benoit
 */
var mapList = exports.mapList = function mapList(key_parts, list) {
  var iteration = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

  var listTexts = list.map(function (child) {
    if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') return readProperty(key_parts, child, iteration + 1).value;else return child;
  });
  if (listTexts.length === 0) return 'none';
  var text = '',
      i = 0;
  for (i; i <= listTexts.length - 1; i++) {
    text += listTexts[i];
    text += i === listTexts.length - 1 ? '' : i === listTexts.length - 2 ? ' and ' : ', ';
  }
  return text;
};

/*
 * recursively sum an array, or array of objects
 * ex: [{user:{view: 1000}}, {user: {views: 1000}}] ==> 2000
 */
var mapSum = exports.mapSum = function mapSum(key_parts, list) {
  var iteration = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

  var listVals = list.map(function (child) {
    if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') return readProperty(key_parts, child, iteration + 1).value;else return child;
  });
  if (listVals.length === 0) return 0;
  var sum = 0,
      i = 0;
  for (i; i <= listVals.length - 1; i++) {
    sum += parseFloat(listVals[i]);
  }
  return sum;
};

/*
 * Read an object property given an accessor array
 * ex: ['user', 'views'], {user: view: {1000}} ==> 1000
 */
var readProperty = exports.readProperty = function readProperty(key_parts, obj) {
  var iteration = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

  if (!key_parts || !key_parts[iteration]) {
    return { value: '_invalid_key_', iteration: iteration };
  }
  var t = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
  if (t === 'string' || t === 'number') {
    {
      value: obj, iteration;
    }
  } else if (key_parts[iteration] && key_parts[iteration] in obj) {
    if (iteration < key_parts.length - 1 && _typeof(obj[key_parts[iteration]]) === 'object') {
      return readProperty(key_parts, obj[key_parts[iteration]], iteration + 1);
    } else {
      // Can't go further down the line
      // Either we have a string or promise/function awaiting execution
      return { value: obj[key_parts[iteration]], iteration: iteration };
    }
  } else if (~['all', 'first', 'sum', 'mean', 'random'].indexOf(key_parts[iteration]) && obj instanceof Array) {
    switch (key_parts[iteration]) {
      case 'first':
        if (!obj[0]) return { value: '_invalid_array_', iteration: iteration };
        return readProperty(key_parts, obj[0], iteration + 1);
        break;
      case 'random':
        var item = obj[Math.floor(Math.random() * obj.length)];
        return readProperty(key_parts, item, iteration + 1);
        break;
      case 'all':
        return readProperty(key_parts, mapList(key_parts, obj, iteration), iteration);
        break;
      case 'sum':
        return readProperty(key_parts, mapSum(key_parts, obj, iteration), iteration);
        break;
      case 'mean':
      case 'avg':
        return readProperty(key_parts, mapSum(key_parts, obj, iteration) / obj.length, iteration);
        break;
    }
  }
  return { value: '_invalid_key_', iteration: iteration };
};

/*
 * Format a template such as `{user.name} made {user.views}` into: `Spi0n made 1000 views`
 */
var render = exports.render = function render(text, options) {
  return text.replace(/([{}])\1|[{](.*?)(?:!(.+?))?[}]/g, function (m, l, key) {
    var val = readProperty(key.split('.'), options).value;
    if (typeof val === 'function') {
      return val();
    }
    return val;
  });
};