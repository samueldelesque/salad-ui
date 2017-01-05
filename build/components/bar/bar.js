'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formatter = require('../../../lib/formatter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bar = function (_React$Component) {
  _inherits(Bar, _React$Component);

  function Bar() {
    _classCallCheck(this, Bar);

    return _possibleConstructorReturn(this, (Bar.__proto__ || Object.getPrototypeOf(Bar)).apply(this, arguments));
  }

  _createClass(Bar, [{
    key: 'formatValue',
    value: function formatValue(value) {
      return this.props.metricName === '%' ? Math.round(value) : (0, _formatter.formatNumber)(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var yMin = 0;
      var yMax = Math.max.apply(Math, _toConsumableArray(data.map(function (point) {
        return point.value;
      })));
      var ySpread = yMax - yMin;
      var yScale = this.activeHeight / (ySpread || 1);

      var barSpacing = this.props.width / this.props.data.length;

      return _react2.default.createElement(
        'svg',
        { width: this.props.width, height: this.props.height },
        this.props.data.map(function (item, i) {
          return _react2.default.createElement('rect', {
            key: 'bar.item.' + i,
            width: _this2.props.barSize,
            height: item.value * yScale,
            y: 0,
            x: i * barSpacing - _this2.props.barSize / 2
          });
        })
      );
    }
  }]);

  return Bar;
}(_react2.default.Component);

Bar.defaultProps = {
  data: [],
  metricName: 'points',
  metricColor: '#777',
  barSize: 7,
  barRailColor: null,
  barColor: '#408AE5',
  label: 'N/A'
};
Bar.propTypes = {
  metricName: _react2.default.PropTypes.string,
  barSize: _react2.default.PropTypes.number,
  label: _react2.default.PropTypes.string,
  metricColor: _react2.default.PropTypes.string,
  barColor: _react2.default.PropTypes.string,
  barRailColor: _react2.default.PropTypes.string
};
exports.default = Bar;