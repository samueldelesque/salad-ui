'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _saladUi = require('../salad-ui');

var _saladUi2 = _interopRequireDefault(_saladUi);

var _icon = require('../icon/icon');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _glob = require('../../lib/glob.js');

var _glob2 = _interopRequireDefault(_glob);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Sadly this is still required... Let's try to get rid of it soon.
// glob.DM_ENV = {
//   'video/grid': {
//     noVideosFound: "No videos found",
//     loadErrorMsg: "Failed to load videos.",
//     searchingFor: "Searching for:",
//     "Load more": "Load more"
//   }
// }

console.log('Enjoying this toolkit? Come to 156 5th ave in NYC for ' + String.fromCharCode(55356, 57211) + ' Friday 6pm.');

var chartData = [{ time: 1422766800000, value: 0, label: "{{value}} active users" }, { time: 1422853200000, value: 9, label: "{{value}} active users" }, { time: 1422939600000, value: 5, label: "{{value}} active users" }, { time: 1423026000000, value: 15, label: "{{value}} active users" }, { time: 1423112400000, value: 7, label: "{{value}} active users" }, { time: 1423198800000, value: 13, label: "{{value}} active users" }];

var selectOptions = [{ name: 'tofu', value: -2, calories: 400 }, { name: 'bacon', value: -1, calories: 900 }, { name: 'roasted chicken', value: 0, calories: 600 }, { name: 'steak', value: 1, calories: 700 }];

var DemoAutocomplete = function (_React$Component) {
  _inherits(DemoAutocomplete, _React$Component);

  function DemoAutocomplete() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, DemoAutocomplete);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DemoAutocomplete)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.countriesDB = [{ "_version": 1, "code": "AD", "_id": "AD", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Andorra" } }, { "_version": 1, "code": "AE", "_id": "AE", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "United Arab Emirates" } }, { "_version": 1, "code": "AF", "_id": "AF", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Afghanistan" } }, { "_version": 1, "code": "AG", "_id": "AG", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Antigua and Barbuda" } }, { "_version": 1, "code": "AI", "_id": "AI", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Anguilla" } }, { "_version": 1, "code": "AL", "_id": "AL", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Albania" } }, { "_version": 1, "code": "AM", "_id": "AM", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Armenia" } }, { "_version": 1, "code": "AO", "_id": "AO", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Angola" } }, { "_version": 1, "code": "AQ", "_id": "AQ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Antarctica" } }, { "_version": 1, "code": "AR", "_id": "AR", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Argentina" } }, { "_version": 1, "code": "AS", "_id": "AS", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "American Samoa" } }, { "_version": 1, "code": "AT", "_id": "AT", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Austria" } }, { "_version": 1, "code": "AU", "_id": "AU", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Australia" } }, { "_version": 1, "code": "AW", "_id": "AW", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Aruba" } }, { "_version": 1, "code": "AX", "_id": "AX", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Aland Islands" } }, { "_version": 1, "code": "AZ", "_id": "AZ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Azerbaijan" } }, { "_version": 1, "code": "BA", "_id": "BA", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Bosnia and Herzegovina" } }, { "_version": 1, "code": "BB", "_id": "BB", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Barbados" } }, { "_version": 1, "code": "BD", "_id": "BD", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Bangladesh" } }, { "_version": 1, "code": "BE", "_id": "BE", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Belgium" } }, { "_version": 1, "code": "BF", "_id": "BF", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Burkina Faso" } }, { "_version": 1, "code": "BG", "_id": "BG", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Bulgaria" } }, { "_version": 1, "code": "BH", "_id": "BH", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Bahrain" } }, { "_version": 1, "code": "BI", "_id": "BI", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Burundi" } }, { "_version": 1, "code": "BJ", "_id": "BJ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Benin" } }, { "_version": 1, "code": "BL", "_id": "BL", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Saint Barthelemy" } }, { "_version": 1, "code": "BM", "_id": "BM", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Bermuda" } }, { "_version": 1, "code": "BN", "_id": "BN", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Brunei" } }, { "_version": 1, "code": "BO", "_id": "BO", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Bolivia" } }, { "_version": 1, "code": "BQ", "_id": "BQ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Bonaire, Saint Eustatius and Saba" } }, { "_version": 1, "code": "BR", "_id": "BR", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Brazil" } }, { "_version": 1, "code": "BS", "_id": "BS", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Bahamas" } }, { "_version": 1, "code": "BT", "_id": "BT", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Bhutan" } }, { "_version": 1, "code": "BV", "_id": "BV", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Bouvet Island" } }, { "_version": 1, "code": "BW", "_id": "BW", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Botswana" } }, { "_version": 1, "code": "BY", "_id": "BY", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Belarus" } }, { "_version": 1, "code": "BZ", "_id": "BZ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Belize" } }, { "_version": 1, "code": "CA", "_id": "CA", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Canada" } }, { "_version": 1, "code": "CC", "_id": "CC", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Cocos Islands" } }, { "_version": 1, "code": "CD", "_id": "CD", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Democratic Republic of the Congo" } }, { "_version": 1, "code": "CF", "_id": "CF", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Central African Republic" } }, { "_version": 1, "code": "CG", "_id": "CG", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Republic of the Congo" } }, { "_version": 1, "code": "CH", "_id": "CH", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Switzerland" } }, { "_version": 1, "code": "CI", "_id": "CI", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Ivory Coast" } }, { "_version": 1, "code": "CK", "_id": "CK", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Cook Islands" } }, { "_version": 1, "code": "CL", "_id": "CL", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Chile" } }, { "_version": 1, "code": "CM", "_id": "CM", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Cameroon" } }, { "_version": 1, "code": "CN", "_id": "CN", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "China" } }, { "_version": 1, "code": "CO", "_id": "CO", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Colombia" } }, { "_version": 1, "code": "CR", "_id": "CR", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Costa Rica" } }, { "_version": 1, "code": "CU", "_id": "CU", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Cuba" } }, { "_version": 1, "code": "CV", "_id": "CV", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Cape Verde" } }, { "_version": 1, "code": "CW", "_id": "CW", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Curacao" } }, { "_version": 1, "code": "CX", "_id": "CX", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Christmas Island" } }, { "_version": 1, "code": "CY", "_id": "CY", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Cyprus" } }, { "_version": 1, "code": "CZ", "_id": "CZ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Czech Republic" } }, { "_version": 1, "code": "DE", "_id": "DE", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Germany" } }, { "_version": 1, "code": "DJ", "_id": "DJ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Djibouti" } }, { "_version": 1, "code": "DK", "_id": "DK", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Denmark" } }, { "_version": 1, "code": "DM", "_id": "DM", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Dominica" } }, { "_version": 1, "code": "DO", "_id": "DO", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Dominican Republic" } }, { "_version": 1, "code": "DZ", "_id": "DZ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Algeria" } }, { "_version": 1, "code": "EC", "_id": "EC", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Ecuador" } }, { "_version": 1, "code": "EE", "_id": "EE", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Estonia" } }, { "_version": 1, "code": "EG", "_id": "EG", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Egypt" } }, { "_version": 1, "code": "EH", "_id": "EH", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Western Sahara" } }, { "_version": 1, "code": "ER", "_id": "ER", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Eritrea" } }, { "_version": 1, "code": "ES", "_id": "ES", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Spain" } }, { "_version": 1, "code": "ET", "_id": "ET", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Ethiopia" } }, { "_version": 1, "code": "FI", "_id": "FI", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Finland" } }, { "_version": 1, "code": "FJ", "_id": "FJ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Fiji" } }, { "_version": 1, "code": "FK", "_id": "FK", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Falkland Islands" } }, { "_version": 1, "code": "FM", "_id": "FM", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Micronesia" } }, { "_version": 1, "code": "FO", "_id": "FO", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Faroe Islands" } }, { "_version": 1, "code": "FR", "_id": "FR", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "France" } }, { "_version": 1, "code": "GA", "_id": "GA", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Gabon" } }, { "_version": 1, "code": "GB", "_id": "GB", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "United Kingdom" } }, { "_version": 1, "code": "GD", "_id": "GD", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Grenada" } }, { "_version": 1, "code": "GE", "_id": "GE", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Georgia" } }, { "_version": 1, "code": "GF", "_id": "GF", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "French Guiana" } }, { "_version": 1, "code": "GG", "_id": "GG", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Guernsey" } }, { "_version": 1, "code": "GH", "_id": "GH", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Ghana" } }, { "_version": 1, "code": "GI", "_id": "GI", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Gibraltar" } }, { "_version": 1, "code": "GL", "_id": "GL", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Greenland" } }, { "_version": 1, "code": "GM", "_id": "GM", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Gambia" } }, { "_version": 1, "code": "GN", "_id": "GN", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Guinea" } }, { "_version": 1, "code": "GP", "_id": "GP", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Guadeloupe" } }, { "_version": 1, "code": "GQ", "_id": "GQ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Equatorial Guinea" } }, { "_version": 1, "code": "GR", "_id": "GR", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Greece" } }, { "_version": 1, "code": "GS", "_id": "GS", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "South Georgia and the South Sandwich Islands" } }, { "_version": 1, "code": "GT", "_id": "GT", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Guatemala" } }, { "_version": 1, "code": "GU", "_id": "GU", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Guam" } }, { "_version": 1, "code": "GW", "_id": "GW", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Guinea-Bissau" } }, { "_version": 1, "code": "GY", "_id": "GY", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Guyana" } }, { "_version": 1, "code": "HK", "_id": "HK", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Hong Kong" } }, { "_version": 1, "code": "HM", "_id": "HM", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Heard Island and McDonald Islands" } }, { "_version": 1, "code": "HN", "_id": "HN", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Honduras" } }, { "_version": 1, "code": "HR", "_id": "HR", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Croatia" } }, { "_version": 1, "code": "HT", "_id": "HT", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Haiti" } }, { "_version": 1, "code": "HU", "_id": "HU", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Hungary" } }, { "_version": 1, "code": "ID", "_id": "ID", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Indonesia" } }, { "_version": 1, "code": "IE", "_id": "IE", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Ireland" } }, { "_version": 1, "code": "IL", "_id": "IL", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Israel" } }, { "_version": 1, "code": "IM", "_id": "IM", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Isle of Man" } }, { "_version": 1, "code": "IN", "_id": "IN", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "India" } }, { "_version": 1, "code": "IO", "_id": "IO", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "British Indian Ocean Territory" } }, { "_version": 1, "code": "IQ", "_id": "IQ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Iraq" } }, { "_version": 1, "code": "IR", "_id": "IR", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Iran" } }, { "_version": 1, "code": "IS", "_id": "IS", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Iceland" } }, { "_version": 1, "code": "IT", "_id": "IT", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Italy" } }, { "_version": 1, "code": "JE", "_id": "JE", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Jersey" } }, { "_version": 1, "code": "JM", "_id": "JM", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Jamaica" } }, { "_version": 1, "code": "JO", "_id": "JO", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Jordan" } }, { "_version": 1, "code": "JP", "_id": "JP", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Japan" } }, { "_version": 1, "code": "KE", "_id": "KE", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Kenya" } }, { "_version": 1, "code": "KG", "_id": "KG", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Kyrgyzstan" } }, { "_version": 1, "code": "KH", "_id": "KH", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Cambodia" } }, { "_version": 1, "code": "KI", "_id": "KI", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Kiribati" } }, { "_version": 1, "code": "KM", "_id": "KM", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Comoros" } }, { "_version": 1, "code": "KN", "_id": "KN", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Saint Kitts and Nevis" } }, { "_version": 1, "code": "KP", "_id": "KP", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "North Korea" } }, { "_version": 1, "code": "KR", "_id": "KR", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "South Korea" } }, { "_version": 1, "code": "KW", "_id": "KW", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Kuwait" } }, { "_version": 1, "code": "KY", "_id": "KY", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Cayman Islands" } }, { "_version": 1, "code": "KZ", "_id": "KZ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Kazakhstan" } }, { "_version": 1, "code": "LA", "_id": "LA", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Laos" } }, { "_version": 1, "code": "LB", "_id": "LB", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Lebanon" } }, { "_version": 1, "code": "LC", "_id": "LC", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Saint Lucia" } }, { "_version": 1, "code": "LI", "_id": "LI", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Liechtenstein" } }, { "_version": 1, "code": "LK", "_id": "LK", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Sri Lanka" } }, { "_version": 1, "code": "LR", "_id": "LR", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Liberia" } }, { "_version": 1, "code": "LS", "_id": "LS", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Lesotho" } }, { "_version": 1, "code": "LT", "_id": "LT", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Lithuania" } }, { "_version": 1, "code": "LU", "_id": "LU", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Luxembourg" } }, { "_version": 1, "code": "LV", "_id": "LV", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Latvia" } }, { "_version": 1, "code": "LY", "_id": "LY", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Libya" } }, { "_version": 1, "code": "MA", "_id": "MA", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Morocco" } }, { "_version": 1, "code": "MC", "_id": "MC", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Monaco" } }, { "_version": 1, "code": "MD", "_id": "MD", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Moldova" } }, { "_version": 1, "code": "ME", "_id": "ME", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Montenegro" } }, { "_version": 1, "code": "MF", "_id": "MF", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Saint Martin" } }, { "_version": 1, "code": "MG", "_id": "MG", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Madagascar" } }, { "_version": 1, "code": "MH", "_id": "MH", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Marshall Islands" } }, { "_version": 1, "code": "MK", "_id": "MK", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Macedonia" } }, { "_version": 1, "code": "ML", "_id": "ML", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Mali" } }, { "_version": 1, "code": "MM", "_id": "MM", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Myanmar" } }, { "_version": 1, "code": "MN", "_id": "MN", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Mongolia" } }, { "_version": 1, "code": "MO", "_id": "MO", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Macao" } }, { "_version": 1, "code": "MP", "_id": "MP", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Northern Mariana Islands" } }, { "_version": 1, "code": "MQ", "_id": "MQ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Martinique" } }, { "_version": 1, "code": "MR", "_id": "MR", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Mauritania" } }, { "_version": 1, "code": "MS", "_id": "MS", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Montserrat" } }, { "_version": 1, "code": "MT", "_id": "MT", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Malta" } }, { "_version": 1, "code": "MU", "_id": "MU", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Mauritius" } }, { "_version": 1, "code": "MV", "_id": "MV", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Maldives" } }, { "_version": 1, "code": "MW", "_id": "MW", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Malawi" } }, { "_version": 1, "code": "MX", "_id": "MX", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Mexico" } }, { "_version": 1, "code": "MY", "_id": "MY", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Malaysia" } }, { "_version": 1, "code": "MZ", "_id": "MZ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Mozambique" } }, { "_version": 1, "code": "NA", "_id": "NA", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Namibia" } }, { "_version": 1, "code": "NC", "_id": "NC", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "New Caledonia" } }, { "_version": 1, "code": "NE", "_id": "NE", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Niger" } }, { "_version": 1, "code": "NF", "_id": "NF", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Norfolk Island" } }, { "_version": 1, "code": "NG", "_id": "NG", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Nigeria" } }, { "_version": 1, "code": "NI", "_id": "NI", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Nicaragua" } }, { "_version": 1, "code": "NL", "_id": "NL", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Netherlands" } }, { "_version": 1, "code": "NO", "_id": "NO", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Norway" } }, { "_version": 1, "code": "NP", "_id": "NP", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Nepal" } }, { "_version": 1, "code": "NR", "_id": "NR", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Nauru" } }, { "_version": 1, "code": "NU", "_id": "NU", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Niue" } }, { "_version": 1, "code": "NZ", "_id": "NZ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "New Zealand" } }, { "_version": 1, "code": "OM", "_id": "OM", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Oman" } }, { "_version": 1, "code": "PA", "_id": "PA", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Panama" } }, { "_version": 1, "code": "PE", "_id": "PE", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Peru" } }, { "_version": 1, "code": "PF", "_id": "PF", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "French Polynesia" } }, { "_version": 1, "code": "PG", "_id": "PG", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Papua New Guinea" } }, { "_version": 1, "code": "PH", "_id": "PH", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Philippines" } }, { "_version": 1, "code": "PK", "_id": "PK", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Pakistan" } }, { "_version": 1, "code": "PL", "_id": "PL", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Poland" } }, { "_version": 1, "code": "PM", "_id": "PM", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Saint Pierre and Miquelon" } }, { "_version": 1, "code": "PN", "_id": "PN", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Pitcairn" } }, { "_version": 1, "code": "PR", "_id": "PR", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Puerto Rico" } }, { "_version": 1, "code": "PS", "_id": "PS", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Palestinian Territory" } }, { "_version": 1, "code": "PT", "_id": "PT", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Portugal" } }, { "_version": 1, "code": "PW", "_id": "PW", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Palau" } }, { "_version": 1, "code": "PY", "_id": "PY", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Paraguay" } }, { "_version": 1, "code": "QA", "_id": "QA", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Qatar" } }, { "_version": 1, "code": "RE", "_id": "RE", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Reunion" } }, { "_version": 1, "code": "RO", "_id": "RO", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Romania" } }, { "_version": 1, "code": "RS", "_id": "RS", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Serbia" } }, { "_version": 1, "code": "RU", "_id": "RU", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Russia" } }, { "_version": 1, "code": "RW", "_id": "RW", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Rwanda" } }, { "_version": 1, "code": "SA", "_id": "SA", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Saudi Arabia" } }, { "_version": 1, "code": "SB", "_id": "SB", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Solomon Islands" } }, { "_version": 1, "code": "SC", "_id": "SC", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Seychelles" } }, { "_version": 1, "code": "SD", "_id": "SD", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Sudan" } }, { "_version": 1, "code": "SE", "_id": "SE", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Sweden" } }, { "_version": 1, "code": "SG", "_id": "SG", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Singapore" } }, { "_version": 1, "code": "SH", "_id": "SH", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Saint Helena" } }, { "_version": 1, "code": "SI", "_id": "SI", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Slovenia" } }, { "_version": 1, "code": "SJ", "_id": "SJ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Svalbard and Jan Mayen" } }, { "_version": 1, "code": "SK", "_id": "SK", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Slovakia" } }, { "_version": 1, "code": "SL", "_id": "SL", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Sierra Leone" } }, { "_version": 1, "code": "SM", "_id": "SM", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "San Marino" } }, { "_version": 1, "code": "SN", "_id": "SN", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Senegal" } }, { "_version": 1, "code": "SO", "_id": "SO", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Somalia" } }, { "_version": 1, "code": "SR", "_id": "SR", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Suriname" } }, { "_version": 1, "code": "SS", "_id": "SS", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "South Sudan" } }, { "_version": 1, "code": "ST", "_id": "ST", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Sao Tome and Principe" } }, { "_version": 1, "code": "SV", "_id": "SV", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "El Salvador" } }, { "_version": 1, "code": "SX", "_id": "SX", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Sint Maarten" } }, { "_version": 1, "code": "SY", "_id": "SY", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Syria" } }, { "_version": 1, "code": "SZ", "_id": "SZ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Swaziland" } }, { "_version": 1, "code": "TC", "_id": "TC", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Turks and Caicos Islands" } }, { "_version": 1, "code": "TD", "_id": "TD", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Chad" } }, { "_version": 1, "code": "TF", "_id": "TF", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "French Southern Territories" } }, { "_version": 1, "code": "TG", "_id": "TG", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Togo" } }, { "_version": 1, "code": "TH", "_id": "TH", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Thailand" } }, { "_version": 1, "code": "TJ", "_id": "TJ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Tajikistan" } }, { "_version": 1, "code": "TK", "_id": "TK", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Tokelau" } }, { "_version": 1, "code": "TL", "_id": "TL", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "East Timor" } }, { "_version": 1, "code": "TM", "_id": "TM", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Turkmenistan" } }, { "_version": 1, "code": "TN", "_id": "TN", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Tunisia" } }, { "_version": 1, "code": "TO", "_id": "TO", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Tonga" } }, { "_version": 1, "code": "TR", "_id": "TR", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Turkey" } }, { "_version": 1, "code": "TT", "_id": "TT", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Trinidad and Tobago" } }, { "_version": 1, "code": "TV", "_id": "TV", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Tuvalu" } }, { "_version": 1, "code": "TW", "_id": "TW", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Taiwan" } }, { "_version": 1, "code": "TZ", "_id": "TZ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Tanzania" } }, { "_version": 1, "code": "UA", "_id": "UA", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Ukraine" } }, { "_version": 1, "code": "UG", "_id": "UG", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Uganda" } }, { "_version": 1, "code": "UM", "_id": "UM", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "United States Minor Outlying Islands" } }, { "_version": 1, "code": "US", "_id": "US", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "United States" } }, { "_version": 1, "code": "UY", "_id": "UY", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Uruguay" } }, { "_version": 1, "code": "UZ", "_id": "UZ", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Uzbekistan" } }, { "_version": 1, "code": "VA", "_id": "VA", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Vatican" } }, { "_version": 1, "code": "VC", "_id": "VC", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Saint Vincent and the Grenadines" } }, { "_version": 1, "code": "VE", "_id": "VE", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Venezuela" } }, { "_version": 1, "code": "VG", "_id": "VG", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "British Virgin Islands" } }, { "_version": 1, "code": "VI", "_id": "VI", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "U.S. Virgin Islands" } }, { "_version": 1, "code": "VN", "_id": "VN", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Vietnam" } }, { "_version": 1, "code": "VU", "_id": "VU", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Vanuatu" } }, { "_version": 1, "code": "WF", "_id": "WF", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Wallis and Futuna" } }, { "_version": 1, "code": "WS", "_id": "WS", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Samoa" } }, { "_version": 1, "code": "XK", "_id": "XK", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Kosovo" } }, { "_version": 1, "code": "YE", "_id": "YE", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Yemen" } }, { "_version": 1, "code": "YT", "_id": "YT", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Mayotte" } }, { "_version": 1, "code": "ZA", "_id": "ZA", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "South Africa" } }, { "_version": 1, "code": "ZM", "_id": "ZM", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Zambia" } }, { "_version": 1, "code": "ZW", "_id": "ZW", "_latest_version": 1, "_created": "1970-01-01T00:00:00Z", "_updated": "1970-01-01T00:00:00Z", "names": { "default": "Zimbabwe" } }], _this.countries = [], _this.state = {
      suggestions: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // constCountryNames = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

  _createClass(DemoAutocomplete, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.countries = this.countriesDB.map(function (country) {
        return { name: country.names.default, value: country.code };
      });
    }
  }, {
    key: 'requestSuggestions',
    value: function requestSuggestions(keyword) {
      var suggs = [];
      keyword = keyword.toLowerCase();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.countries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var country = _step.value;

          if (country.name.toLowerCase().startsWith(keyword)) {
            suggs.push(country);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.setState({
        suggestions: suggs
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var acProps = {
        handleSelectItem: function handleSelectItem(val) {
          return console.log('You have selected', val);
        },
        inputPlaceholder: 'Start typing a country name',
        requestSuggestions: this.requestSuggestions.bind(this),
        suggestionTextKey: 'name',
        allowCustomText: false,
        suggestions: this.state.suggestions
      };

      // style: {
      //   border: 'none',
      //   color: 'white',
      //   background: 'transparent'
      // }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_saladUi2.default.Form.Autocomplete, acProps)
      );
    }
  }]);

  return DemoAutocomplete;
}(_react2.default.Component);

var Demo = function (_React$Component2) {
  _inherits(Demo, _React$Component2);

  function Demo() {
    var _Object$getPrototypeO2;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, Demo);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(Demo)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this2), _this2.state = {
      selectedRadio: 'radio1',
      protein: { name: null, value: null, calories: 0 },
      tagsAdded: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'],
      showOverlay: false
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(Demo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
      ga('create', 'UA-78769010-1', 'auto');
      _saladUi2.default.Lib.tracking.trackPage('SaladUI Demo');
    }
  }, {
    key: 'handleRemoveTag',
    value: function handleRemoveTag(tag) {
      console.log('item to remove: ', tag);
      var tags = this.state.tagsAdded,
          index = this.state.tagsAdded.indexOf(tag);

      tags.splice(index, 1);
      this.setState({
        tagsAdded: tags
      });
    }
  }, {
    key: 'showOverlay',
    value: function showOverlay() {
      this.setState({
        showOverlay: true
      });
    }
  }, {
    key: 'closeOverlay',
    value: function closeOverlay() {
      this.setState({
        showOverlay: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'demo' },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Salad-UI ',
            String.fromCharCode(55357, 56960)
          ),
          _react2.default.createElement(
            'h2',
            null,
            _react2.default.createElement(
              'pre',
              null,
              'npm i --save salad-ui'
            ),
            _react2.default.createElement(
              'pre',
              null,
              'import SaladUI from \'salad-ui\''
            ),
            _react2.default.createElement(
              'pre',
              null,
              '<SaladUI.Chart.Area/>'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Salad-UI can be enjoyed as a complete salad using ',
            _react2.default.createElement(
              'i',
              { className: 'snippet' },
              'import SaladUI from \'salad-ui\''
            ),
            ' or as its separate ingredients using ',
            _react2.default.createElement(
              'i',
              { className: 'snippet' },
              'import Chart from \'salad-ui.chart\''
            ),
            '.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Salad-UI is composed of: Form, Chart, Utils, Lib, Icon.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Salad-UI will work both in Browser and Server environment - use it in your universal apps!'
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Form'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'functionality' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Autocomplete'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Autocomplete/>'
              ),
              _react2.default.createElement(DemoAutocomplete, null)
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Checkbox'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Checkbox/>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Form.Checkbox,
                null,
                'This is a checkbox'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Radio'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<RadioGroup/><Radio></RadioGroup>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Form.RadioGroup,
                { name: 'radiotest', onChange: function onChange(val) {
                    return _this3.setState({ selectedRadio: val });
                  }, selected: this.state.selectedRadio },
                _react2.default.createElement(
                  _saladUi2.default.Form.Radio,
                  { value: 'radio1' },
                  'This is a Radio element'
                ),
                _react2.default.createElement(
                  _saladUi2.default.Form.Radio,
                  { value: 'radio2' },
                  'This is another Radio element'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' InputText'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<InputText/><InputText textarea/>'
              ),
              _react2.default.createElement(_saladUi2.default.Form.InputText, null),
              _react2.default.createElement(_saladUi2.default.Form.InputText, { textarea: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Toggle'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Toggle/>'
              ),
              _react2.default.createElement(_saladUi2.default.Form.Toggle, null)
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Select'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'let options = [\n  {name: \'tofu\', value: \'tofu\', calories: 400},\n  {name: \'bacon\', value: \'bacon\', calories: 900},\n  {name: \'roasted chicken\', value: \'chicken\', calories: 600},\n  {name: \'steak\', value: \'steak\', calories: 700}\n]\n<Select\n  options={options}\n  onChange={(protein)=>this.setState({protein})}>Pick one</Select>'
              ),
              _react2.default.createElement(
                'div',
                { style: { width: 300 } },
                _react2.default.createElement(
                  _saladUi2.default.Form.Select,
                  {
                    options: selectOptions,
                    onChange: function onChange(protein) {
                      return _this3.setState({ protein: protein });
                    } },
                  'Pick a protein'
                ),
                _react2.default.createElement(
                  'p',
                  { style: { margin: '10px 0' } },
                  'Select without border'
                ),
                _react2.default.createElement(
                  _saladUi2.default.Form.Select,
                  {
                    options: selectOptions,
                    value: selectOptions[2].value,
                    onChange: function onChange(protein) {
                      return _this3.setState({ protein: protein });
                    },
                    noBorder: true },
                  'Borderless'
                ),
                _react2.default.createElement(
                  'p',
                  { style: { padding: 10 } },
                  'Protein: ',
                  _react2.default.createElement(
                    'b',
                    { style: { fontWeight: 'bold' } },
                    this.state.protein.value,
                    ' (',
                    this.state.protein.calories,
                    'cal)'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Lib'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'functionality' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' childrenWithProps'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'childrenWithProps(reactComponent, __INITIAL_PROPS__)'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' currencyToSymbol'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'currencyToSymbol(\'USD\')\n// $'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' f'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'f.get(\'http://api.dailymotion.com/user/spi0n\')\n.then(json => console.log(json))\n.catch(err => console.error(err))\n\nf.post(\'http://api.dailymotion.com/user/spi0n\')\nf.delete(\'http://api.dailymotion.com/user/spi0n\')'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' glob'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'glob.canUseDom()\n// true'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' numberToString'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'numberToString(10782)\n// 11k'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' polyfill'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'polyfill()\n// Object.assign etc are now available in your shitty browser'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' sso'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'sso.init(SDX)\nsso.getJWT(\'revshare\').then(token => {\n  console.log(\'Yay I have a token!\')\n})'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' tracking'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'tracking.trackPage(\'SaladUI Demo\')\ntracking.trackEvent(\'eventName\', {ga: {label: \'test\'}})'
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Stylesheet'
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Chart'
          ),
          _react2.default.createElement(
            'pre',
            null,
            '<SaladUI.Chart.Area\n  width={900}\n  height={300}\n  data={chartData} width={560}\n  />'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_saladUi2.default.Chart.Area, _defineProperty({
              width: 900,
              height: 300,
              data: chartData }, 'width', 600))
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Util'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'functionality' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Alert'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Alert type="info/error/success/warning">Hello World</Alert>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.Alert,
                { type: 'info', onClose: function onClose() {
                    return alert("don't close me!");
                  }, title: 'title eh' },
                'Hello World'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Trans'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Trans context={{"Hello": "Bonjour"}}>Hello</Trans>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.Trans,
                { context: { "Hello": "Bonjour" } },
                'Hello'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Button'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Button onPress={()=>alert(\'ay ay captain\')}>Press Me</Button>'
              ),
              _react2.default.createElement(
                'div',
                { style: { padding: 10 } },
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    } },
                  'Press Me'
                ),
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    }, type: 'primary', style: { marginLeft: 10 } },
                  'Type primary'
                ),
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    }, size: 'sm', style: { marginLeft: 10 } },
                  'Size small'
                )
              ),
              _react2.default.createElement(
                'div',
                { style: { padding: 10 } },
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    }, size: 'lg', mouseOverText: 'Way fatter.', loading: true },
                  'I am bigger.'
                ),
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    }, style: { marginLeft: 10 }, size: 'lg', type: 'success', mouseOverText: 'Unfollow' },
                  'Following'
                )
              ),
              _react2.default.createElement(
                'div',
                { style: { padding: 10 } },
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    }, fullWidth: true },
                  'I am longer.'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' ProfilePicture'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<ProfilePicture size={50}/>'
              ),
              _react2.default.createElement(_saladUi2.default.Util.ProfilePicture, null),
              _react2.default.createElement(_saladUi2.default.Util.ProfilePicture, { src: 'https://lh6.googleusercontent.com/-2lJYGtfXKwQ/AAAAAAAAAAI/AAAAAAAB15E/JDAoqjtUysE/s0-c-k-no-ns/photo.jpg' }),
              _react2.default.createElement(_saladUi2.default.Util.ProfilePicture, { src: 'http://s2.dmcdn.net/JWg8h/118x118-Os1.png' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Tag List'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<TagList items=[\'tag1\',\'tag2\',\'tag3\',\'tag4\',\'tag5\',\'tag6\']/>'
              ),
              _react2.default.createElement(_saladUi2.default.Util.TagList, { items: this.state.tagsAdded, handleRemoveItem: function handleRemoveItem(t) {
                  return _this3.handleRemoveTag(t);
                } })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Badges'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<SaladUI.Util.Badge type=\'live\'>Live</SaladUI.Util.Badge>'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<SaladUI.Util.Badge type=\'verified\'></SaladUI.Util.Badge>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.Badge,
                { position: 'inline', type: 'live' },
                'Live'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.Badge,
                { position: 'inline', type: 'duration' },
                '00:23'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.Badge,
                { position: 'inline', type: 'verified' },
                _react2.default.createElement(_saladUi2.default.Icon, { type: 'check', fill: 'white', width: 12, height: 12 })
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Icon ',
            _react2.default.createElement(_saladUi2.default.Icon, { type: 'favorite', fill: 'white', width: 20, height: 20 })
          ),
          _react2.default.createElement(
            'pre',
            null,
            '<SaladUI.Icon\n    type="favorite"\n    fill="white"\n    width={20}\n    height={20}/>'
          ),
          _react2.default.createElement(
            'div',
            { className: 'icon-list' },
            _lodash2.default.map(_icon.iconTypes, function (path, icon) {
              return _react2.default.createElement(
                'span',
                { key: 'icon.' + icon, className: 'icon-item' },
                _react2.default.createElement(_saladUi2.default.Icon, { type: icon, fill: 'white' }),
                _react2.default.createElement(
                  'span',
                  { className: 'icon-title' },
                  icon
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Video'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'functionality' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Grid'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<SaladUI.Video.Grid/>'
              ),
              _react2.default.createElement(_saladUi2.default.Video.Grid, { apiURL: 'https://api.dailymotion.com', limit: 10, endpoint: '/videos' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Grid'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<SaladUI.Video.Grid/>'
              ),
              _react2.default.createElement(_saladUi2.default.Video.Grid, { apiURL: 'https://api.dailymotion.com', mediaType: 'playlist', limit: 5, endpoint: '/user/spi0n/playlists' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' List'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<SaladUI.Video.List/>'
              ),
              _react2.default.createElement(_saladUi2.default.Video.List, { apiURL: 'https://api.dailymotion.com', limit: 3, endpoint: '/videos' })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Overlay'
          ),
          _react2.default.createElement(
            'pre',
            null,
            '<SaladUI.Util.Overlay\n    show=true\n    onClose={()}\n    closeButton={true}>\n    <overlayHeader style={{backgroundColor:\'blue\'}}>\n      This is the header section and the overlay\'s title\n    </overlayHeader>\n    <overlayContent>\n      This is overlay\'s content This is overlay\'s content This is overlay\'s content This is overlay\'s content\n    </overlayContent>\n    <overlayFooter>\n      <SaladUI.Util.Button onPress={()=>this.closeOverlay()} style={{marginRight: \'10px\'}}>Cancel</SaladUI.Util.Button>\n      <SaladUI.Util.Button type="primary" onPress={()=>this.closeOverlay()}>Save</SaladUI.Util.Button>\n    </overlayFooter>\n  </SaladUI.Util.Overlay>\n'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'functionality' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _saladUi2.default.Util.Button,
                { type: 'primary', onPress: function onPress() {
                    return _this3.showOverlay();
                  } },
                'Click me!'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.Overlay,
                {
                  show: this.state.showOverlay,
                  onClose: function onClose() {
                    return _this3.closeOverlay();
                  },
                  closeButton: true },
                _react2.default.createElement(
                  'overlayHeader',
                  null,
                  'This is the header section and the overlay\'s title'
                ),
                _react2.default.createElement(
                  'overlayContent',
                  null,
                  'This is overlay\'s content This is overlay\'s content This is overlay\'s content This is overlay\'s content'
                ),
                _react2.default.createElement(
                  'overlayFooter',
                  null,
                  _react2.default.createElement(
                    _saladUi2.default.Util.Button,
                    { onPress: function onPress() {
                        return _this3.closeOverlay();
                      }, style: { marginRight: '10px' } },
                    'Cancel'
                  ),
                  _react2.default.createElement(
                    _saladUi2.default.Util.Button,
                    { type: 'primary', onPress: function onPress() {
                        return _this3.closeOverlay();
                      } },
                    'Save'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'footer',
          null,
          'Made with love at ',
          _react2.default.createElement(
            'a',
            { href: 'http://dailymotion.com' },
            'Dailymotion'
          ),
          ' in NYC.'
        )
      );
    }
  }]);

  return Demo;
}(_react2.default.Component);

exports.default = Demo;