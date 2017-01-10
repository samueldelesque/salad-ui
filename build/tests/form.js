'use strict';

require('universal-fetch');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiAsPromised2.default);

var Form = require('../components/form').default;

describe('Form', function () {
  describe('Autocomplete', function () {
    var autocomplete = (0, _enzyme.shallow)(_react2.default.createElement(Form.Autocomplete, {
      handleSelectItem: function handleSelectItem(val) {
        return console.log('You have selected', val);
      },
      inputPlaceholder: 'Placeholder',
      allowCustomText: false,
      suggestions: ['sug1', 'sug2']
    }));
    // Can't find input for some reason...

    // console.log(autocomplete.html())
    // it('should render an input', function () {
    //   expect(autocomplete.find('input[type="text"]'). ).to.equal(1)
    // })
  });
});