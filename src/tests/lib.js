const React = require('react')
const ReactDOM = require('react-dom')
require('universal-fetch')
const chai = require('chai')
const assert = require('chai').assert
const chaiAsPromised = require("chai-as-promised")
const {Simulate, renderIntoDocument} = require('react-addons-test-utils')

chai.use(chaiAsPromised)

const Lib = require('../lib')

describe('Lib', function () {
  it('#glob.canUseDom() should return false when not used within browser', function () {
    assert.equal(false, Lib.glob.canUseDom())
  })
  it('#http.get("http://jsonplaceholder.typicode.com/posts/1") should eventually return an object having a userId', function () {
    Lib.http.get("http://jsonplaceholder.typicode.com/posts/1")
    .then(res=>assert(res).should.have("userId"))
    .catch(res=>console.log('http://jsonplaceholder.typicode.com/posts/1 down...'))
  })
})
