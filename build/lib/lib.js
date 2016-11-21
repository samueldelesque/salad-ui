'use strict';

var _formatter = require('./formatter.js');

var formatter = _interopRequireWildcard(_formatter);

var _domainService = require('./domain-service');

var _domainService2 = _interopRequireDefault(_domainService);

var _tracking = require('./tracking');

var tracking = _interopRequireWildcard(_tracking);

var _http = require('./http');

var http = _interopRequireWildcard(_http);

var _glob = require('./glob');

var _glob2 = _interopRequireDefault(_glob);

var _scrollTo = require('./scroll-to');

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var _sso = require('./sso');

var _sso2 = _interopRequireDefault(_sso);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Lib = {
  formatter: formatter,
  domainService: _domainService2.default,
  tracking: tracking,
  http: http,
  f: http,
  glob: _glob2.default,
  scrollTo: _scrollTo2.default,
  sso: _sso2.default
};

module.exports = Lib;