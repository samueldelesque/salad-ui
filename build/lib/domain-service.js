'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _http = require('./http');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ds = function () {
  function ds() {
    _classCallCheck(this, ds);
  }

  _createClass(ds, null, [{
    key: 'init',
    value: function init(token) {
      var apiEndpoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (apiEndpoint) ds.apiEndpoint = apiEndpoint;else ds.apiEndpoint = 'https://api.pxlad.io';

      ds.token = token;
    }
  }, {
    key: 'setApiEndpoint',
    value: function setApiEndpoint(apiEndpoint) {
      ds.apiEndpoint = apiEndpoint;
    }
  }, {
    key: 'setToken',
    value: function setToken(token) {
      ds.token = token;
    }
  }, {
    key: 'getDomains',
    value: function getDomains() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var maxResults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

      var url = ds.apiEndpoint + '/domains?access_token=' + ds.token + '&page=' + page + '&max_results=' + maxResults;
      return (0, _http.fetchJSON)(url).then(function (data) {
        if (data && data._items) return data;else throw new Error('NO_DOMAINS');
      }).catch(function (err) {
        throw new Error('Failed to retrieve domain related information', err);
      });
    }
  }, {
    key: 'getVerifiedDomains',
    value: function getVerifiedDomains() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var maxResults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

      var url = ds.apiEndpoint + '/domains?access_token=' + ds.token + '&where=' + encodeURIComponent('{"status":"verified"}');
      '&page=' + page + '&max_results=' + maxResults;
      return (0, _http.fetchJSON)(url).then(function (data) {
        if (data && data._items) return data;else throw new Error('NO_VERIFIED_DOMAINS');
      }).catch(function (err) {
        throw new Error('Failed to retrieve domain related information', err);
      });
    }
  }, {
    key: 'addDomain',
    value: function addDomain(name) {
      var url = ds.apiEndpoint + '/domains?access_token=' + ds.token;
      return (0, _http.post)(url, { data: { name: name } }).then(function (data) {
        return data;
      }).catch(function (err) {
        throw new Error('Error adding a site', err);
      });
    }
  }, {
    key: 'verifySite',
    value: function verifySite(id) {
      var url = ds.apiEndpoint + '/domains/' + id + '?access_token=' + ds.token;
      return (0, _http.patch)(url, { data: { ready: true } }).then(function (data) {
        return data;
      }).catch(function (err) {
        throw new Error('Error verifying the site', err);
      });
    }
  }, {
    key: 'removeSite',
    value: function removeSite(id) {
      var url = ds.apiEndpoint + '/domains/' + id + '?access_token=' + ds.token;
      return (0, _http.del)(url).then().catch(function (err) {
        throw new Error('Error deleting a site: ', err);
      });
    }
  }]);

  return ds;
}();

exports.default = ds;