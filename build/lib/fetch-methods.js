'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = exports.put = exports.patch = exports.post = exports.get = exports.fetchJSON = exports.serialize = exports.enableDebug = exports.enableMock = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _lodash = require('lodash.merge');

var _lodash2 = _interopRequireDefault(_lodash);

var _glob = require('./glob');

var _glob2 = _interopRequireDefault(_glob);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = false;
var mockApi = false;

var enableMock = exports.enableMock = function enableMock() {
  var enable = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
  return mockApi = enable;
};
var enableDebug = exports.enableDebug = function enableDebug() {
  var enable = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
  return debug = enable;
};
var buildError = function buildError(title, res) {
  var error = new Error(title);
  error.res = res;
  return error;
};

var serialize = exports.serialize = function serialize(obj) {
  var str = [];
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  }return str.join("&");
};
var fetchJSON = exports.fetchJSON = function fetchJSON(url) {
  var method = arguments.length <= 1 || arguments[1] === undefined ? 'GET' : arguments[1];
  var params = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  method = method.toUpperCase();
  if (! ~['GET', 'POST', 'DELETE', 'PUT', 'PATCH'].indexOf(method)) {
    if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' && !params) params = method;
    method = 'GET';
  }

  params = (0, _lodash2.default)({
    method: method,
    headers: {},
    contentType: 'JSON'
  }, params);

  if (method === 'GET' && params.data) {
    if (debug) {
      console.log('serialize GET params', JSON.stringify(params.data));
    }
    url += (! ~url.indexOf('?') ? '?' : '&') + serialize(params.data);
    delete params.data;
  }

  if ((method === 'POST' || method === 'PATCH') && params.contentType.toUpperCase() === 'JSON') {
    params.headers['Content-Type'] = 'application/json';
    params.body = JSON.stringify(params.data);
    delete params.data;
  }

  if (debug || params.debug) console.log(method, url, params);

  if (mockApi) url = '/api-mock?url=' + btoa(url);

  delete params.contentType;

  return fetch(url, params).then(function (res) {
    if (params.debug) console.log('Response: ', res);
    if (res.status >= 399) throw buildError(res.status + ' error', res);
    if (res.status === 204) return res;
    return res.json();
  });
};
var get = exports.get = function get(url) {
  var params = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object' && !params) params = url;
  return fetchJSON(url, 'GET', params);
};
var post = exports.post = function post(url) {
  var params = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object' && !params) params = url;
  return fetchJSON(url, 'POST', params);
};
var patch = exports.patch = function patch(url) {
  var params = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object' && !params) params = url;
  return fetchJSON(url, 'PATCH', params);
};
var put = exports.put = function put(url) {
  var params = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object' && !params) params = url;
  return fetchJSON(url, 'PUT', params);
};
var del = exports.del = function del(url) {
  var params = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object' && !params) params = url;
  return fetchJSON(url, 'DELETE', params);
};