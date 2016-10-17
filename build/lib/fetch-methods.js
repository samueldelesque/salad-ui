'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = exports.put = exports.patch = exports.post = exports.get = exports.fetchJSON = exports.apiFactory = exports.serialize = exports.enableDebug = exports.enableMock = undefined;

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

var apiFactory = exports.apiFactory = function apiFactory(baseUrl, baseParams) {
  return {
    get: function get(url, params) {
      return _get(baseUrl + url, (0, _lodash2.default)({}, baseParams, params));
    },
    post: function post(url, params) {
      return _post(baseUrl + url, (0, _lodash2.default)({}, baseParams, params));
    },
    del: function del(url, params) {
      return _del(baseUrl + url, (0, _lodash2.default)({}, baseParams, params));
    },
    put: function put(url, params) {
      return _put(baseUrl + url, (0, _lodash2.default)({}, baseParams, params));
    },
    patch: function patch(url, params) {
      return _patch(baseUrl + url, (0, _lodash2.default)({}, baseParams, params));
    }
  };
};

var fetchJSON = exports.fetchJSON = function fetchJSON(url) {
  var method = arguments.length <= 1 || arguments[1] === undefined ? 'GET' : arguments[1];
  var params = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  method = method.toUpperCase();
  if (!~['GET', 'POST', 'DELETE', 'PUT', 'PATCH'].indexOf(method)) {
    if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' && !params) params = method;
    method = 'GET';
  }

  params = (0, _lodash2.default)({
    method: method,
    headers: {},
    contentType: 'JSON'
  }, params);

  if (method === 'GET' && params.data || params.useQueryParams && params.data) {
    if (debug) {
      console.log('serialize params', JSON.stringify(params.data));
    }
    url += (!~url.indexOf('?') ? '?' : '&') + serialize(params.data);
    delete params.data;
  } else if ((method === 'POST' || method === 'PATCH' || method === 'DELETE') && params.contentType.toUpperCase() === 'JSON') {
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
    if (params.headers['Content-Type'] && params.headers['Content-Type'].includes('text')) return res.text();else return res.json();
  });
};
var _get = function _get(url) {
  var params = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object' && !params) params = url;
  return fetchJSON(url, 'GET', params);
};
exports.get = _get;
var _post = function _post(url) {
  var params = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object' && !params) params = url;
  return fetchJSON(url, 'POST', params);
};
exports.post = _post;
var _patch = function _patch(url) {
  var params = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object' && !params) params = url;
  return fetchJSON(url, 'PATCH', params);
};
exports.patch = _patch;
var _put = function _put(url) {
  var params = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object' && !params) params = url;
  return fetchJSON(url, 'PUT', params);
};
exports.put = _put;
var _del = function _del(url) {
  var params = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object' && !params) params = url;
  return fetchJSON(url, 'DELETE', params);
};
exports.del = _del;