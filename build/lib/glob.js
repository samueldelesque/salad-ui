'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CANUSEDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var glob = {};
if (CANUSEDOM) {
  glob = window;
} else {
  console.log('SaladUI being used in Server mode.');
  glob = global;
}
if (!glob.DM_ENV) glob.DM_ENV = {};

glob.canUseDom = function () {
  return CANUSEDOM;
};

String.prototype.trans = function () {
  return this;
};

exports.default = {
  canUseDom: function canUseDom() {
    return false;
  }
};