'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadMore = exports.ListArea = exports.GridArea = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _saladUi = require('../salad-ui');

var _saladUi2 = _interopRequireDefault(_saladUi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridArea = exports.GridArea = function (_React$Component) {
  _inherits(GridArea, _React$Component);

  function GridArea() {
    _classCallCheck(this, GridArea);

    return _possibleConstructorReturn(this, (GridArea.__proto__ || Object.getPrototypeOf(GridArea)).apply(this, arguments));
  }

  _createClass(GridArea, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _saladUi2.default.Util.Grid,
        null,
        this.props.videos.map(function (video, index) {
          return _react2.default.createElement(_saladUi2.default.Video.Preview, _extends({ key: 'video.' + index, type: 'grid' }, video));
        })
      );
    }
  }]);

  return GridArea;
}(_react2.default.Component);

var ListArea = exports.ListArea = function (_React$Component2) {
  _inherits(ListArea, _React$Component2);

  function ListArea() {
    _classCallCheck(this, ListArea);

    return _possibleConstructorReturn(this, (ListArea.__proto__ || Object.getPrototypeOf(ListArea)).apply(this, arguments));
  }

  _createClass(ListArea, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'video-list-area' },
        this.props.videos.map(function (video, index) {
          return _react2.default.createElement(_saladUi2.default.Video.Preview, _extends({ key: 'video.' + index, width: 220, type: 'list' }, video));
        })
      );
    }
  }]);

  return ListArea;
}(_react2.default.Component);

var LoadMore = exports.LoadMore = function (_React$Component3) {
  _inherits(LoadMore, _React$Component3);

  function LoadMore() {
    _classCallCheck(this, LoadMore);

    return _possibleConstructorReturn(this, (LoadMore.__proto__ || Object.getPrototypeOf(LoadMore)).apply(this, arguments));
  }

  _createClass(LoadMore, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        _saladUi2.default.Util.Button,
        { loading: this.props.loading, fullWidth: true, onPress: function onPress() {
            return _this4.props.loadMore();
          } },
        'Load More'
      );
    }
  }]);

  return LoadMore;
}(_react2.default.Component);