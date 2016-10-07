'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.isObject = isObject;
exports.mergeDeep = mergeDeep;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Simple is object check.
 * @param item
 * @returns {boolean}
 */
function isObject(item) {
  return item && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @param target
 * @param source
 */
function mergeDeep(target, source) {
  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, _defineProperty({}, key, source[key]));
      }
    }
  }
  return target;
}