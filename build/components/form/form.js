'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autocomplete = require('./autocomplete/autocomplete');

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _checkbox = require('./checkbox/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radioGroup = require('./radio-group/radio-group');

var _radioGroup2 = _interopRequireDefault(_radioGroup);

var _radio = require('./radio/radio');

var _radio2 = _interopRequireDefault(_radio);

var _select = require('./select/select');

var _select2 = _interopRequireDefault(_select);

var _inputText = require('./input-text/input-text');

var _inputText2 = _interopRequireDefault(_inputText);

var _switch = require('./switch/switch');

var _switch2 = _interopRequireDefault(_switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Autocomplete: _autocomplete2.default,
  Checkbox: _checkbox2.default,
  RadioGroup: _radioGroup2.default,
  Radio: _radio2.default,
  InputText: _inputText2.default,
  Switch: _switch2.default,
  Select: _select2.default
};