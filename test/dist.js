var React = require('react')
var ReactDOM = require('react-dom')
require('universal-fetch')
var SaladUI = require('../dist/salad-ui/salad-ui').default
var chai = require('chai')
var assert = require('chai').assert
var chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)

describe('SaladUI', function() {
  describe('Lib', function () {
    it('#glob.canUseDom() should return false when not used within browser', function () {
      assert.equal(false, SaladUI.Lib.glob.canUseDom())
    })
    it('#f.get("http://jsonplaceholder.typicode.com/posts/1") should eventually return an object having a userId', function () {
      SaladUI.Lib.f.get("http://jsonplaceholder.typicode.com/posts/1").then(
        function(res){
          assert(res).should.have("userId")
        },
        function(res){
          console.log('http://jsonplaceholder.typicode.com/posts/1 down...')
        }
      )
    })
  })
})
