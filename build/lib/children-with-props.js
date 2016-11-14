'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = childrenWithProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function childrenWithProps(children) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return _react2.default.Children.map(children, function (child) {
    return _react2.default.cloneElement(child, Object.assign({}, props));
  });
}