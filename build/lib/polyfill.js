'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  // execute me when I land in a browser
  console.log('Adding support for console, promises, fetch, object.assign...');
  require('es6-shim');
  require('console-polyfill');
  require('universal-fetch');
  // var entries = require('object.entries')

  if (!window.Promise && !window.hasOwnProperty('Promise')) {
    window.Promise = require('es6-promise').Promise;
  }

  // if(!Object.entries) {
  // 	entries.shim();
  // }


  // Should be included in es6-shim


  // if (typeof Object.assign != 'function') {
  //   (function () {
  //     Object.assign = function (target) {
  //       'use strict';
  //       if (target === undefined || target === null) {
  //         throw new TypeError('Cannot convert undefined or null to object');
  //       }
  //
  //       var output = Object(target);
  //       for (var index = 1; index < arguments.length; index++) {
  //         var source = arguments[index];
  //         if (source !== undefined && source !== null) {
  //           for (var nextKey in source) {
  //             if (source.hasOwnProperty(nextKey)) {
  //               output[nextKey] = source[nextKey];
  //             }
  //           }
  //         }
  //       }
  //       return output;
  //     };
  //   })();
  // }

  // if (!Array.prototype.find) {
  //   Array.prototype.find = function(predicate) {
  //     if (this === null) {
  //       throw new TypeError('Array.prototype.find called on null or undefined');
  //     }
  //     if (typeof predicate !== 'function') {
  //       throw new TypeError('predicate must be a function');
  //     }
  //     var list = Object(this);
  //     var length = list.length >>> 0;
  //     var thisArg = arguments[1];
  //     var value;
  //
  //     for (var i = 0; i < length; i++) {
  //       value = list[i];
  //       if (predicate.call(thisArg, value, i, list)) {
  //         return value;
  //       }
  //     }
  //     return undefined;
  //   };
  // }
  //
  // if (!Array.prototype.findIndex) {
  //   Array.prototype.findIndex = function(predicate) {
  //     if (this === null) {
  //       throw new TypeError('Array.prototype.findIndex called on null or undefined');
  //     }
  //     if (typeof predicate !== 'function') {
  //       throw new TypeError('predicate must be a function');
  //     }
  //     var list = Object(this);
  //     var length = list.length >>> 0;
  //     var thisArg = arguments[1];
  //     var value;
  //
  //     for (var i = 0; i < length; i++) {
  //       value = list[i];
  //       if (predicate.call(thisArg, value, i, list)) {
  //         return i;
  //       }
  //     }
  //     return -1;
  //   };
  // }
};