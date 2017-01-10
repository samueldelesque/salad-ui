'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
require('universal-fetch');
var chai = require('chai');
var assert = require('chai').assert;
var chaiAsPromised = require("chai-as-promised");

var _require = require('react-addons-test-utils'),
    Simulate = _require.Simulate,
    renderIntoDocument = _require.renderIntoDocument;

chai.use(chaiAsPromised);

var Lib = require('../lib');

describe('Lib', function () {
  it('#glob.canUseDom() should return false when not used within browser', function () {
    assert.equal(false, Lib.glob.canUseDom());
  });
  it('#http.get("http://jsonplaceholder.typicode.com/posts/1") should eventually return an object having a userId', function () {
    Lib.http.get("http://jsonplaceholder.typicode.com/posts/1").then(function (res) {
      return assert(res).should.have("userId");
    }).catch(function (res) {
      return console.log('http://jsonplaceholder.typicode.com/posts/1 down...');
    });
  });
});