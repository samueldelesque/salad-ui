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
    key: 'renderYGridLine',
    value: function renderYGridLine(label, index) {
      return _react2.default.createElement('line', {
        key: 'graph.ygridLine.' + index,
        x1: 0,
        y1: label.y,
        x2: this.props.width,
        y2: label.y,
        style: { stroke: this.props.gridColor, strokeWidth: 1 }
      });
    }
  }, {
    key: 'describeYAxis',
    value: function describeYAxis(yMin, ySpread, yScale) {
      var _this2 = this;

      function ruler(value, m) {
        if (!m) m = 100;
        if (value > m) ruler(value, m * 5);
        return Math.ceil(value / m) * m / 10;
      }

      var rule = ruler(ySpread, ySpread / 10),
          lines = [1, 2, 3, 4, 5, 6, 7, 8, 9],
          labels = [0, 1, 2, 3, 4],
          isZero = ySpread === 0 && yMin === 0;

      return {
        gridLines: lines.map(function (k) {
          return { y: isZero ? yScale : (ySpread - k * rule) * yScale };
        }),
        labels: labels.map(function (k) {
          var v = k * rule * 2;
          return {
            y: isZero ? yScale : (ySpread - k * rule * 2) * yScale,
            txt: (0, _formatter.formatNumber)(Math.round(v + yMin)) + (_this2.props.isPercent ? '%' : '')
          };
        })
      };
    }
  }, {
    key: 'renderTip',
    value: function renderTip(index, text, xBase, yBase) {
      var triangleWidth = 25;
      var triangleHeight = 10;

      var trianglePath = [xBase - triangleWidth / 2 + ',' + yBase - 10, xBase + triangleWidth / 2 + ',' + yBase - 10, xBase + ',' + (yBase + triangleHeight) - 10].join(' ');
      var triangleBorderPath = [xBase - triangleWidth / 2 + ',' + yBase - 10, xBase + triangleWidth / 2 + ',' + yBase - 10, xBase + ',' + (yBase + triangleHeight) - 10].join(' ');

      var boxWidth = 28;
      var boxHeight = 15;

      return _react2.default.createElement(
        'g',
        { key: 'point.' + index, ref: 'point.' + index },
        _react2.default.createElement(
          'text',
          {
            x: xBase - boxWidth / 2,
            y: yBase - boxHeight / 2,
            style: { fontSize: 16, fontWeight: 'bold' }
          },
          text
        )
      );
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel(label, index) {
      if (!label.x) {
        if (this.props.yLabelsPosition === 'right') label.x = this.activeWidth + (this.props.yLabelsOutside ? 5 : -1 * (20 + 5 * (label.txt.length || 1)));else label.x = 0;
      }
      if (!label.ref) label.ref = 'label.' + index + ',' + label.x + ',' + label.y;
      return _react2.default.createElement(
        'text',
        {
          key: 'graph.yAxis.label.' + label.ref,
          x: label.x,
          y: label.y,
          ref: label.ref,
          fill: this.props.labelColor,
          style: { fontSize: this.props.labelFontSize, textShadow: this.props.labelTextShadow, textAlign: 'center' }
        },
        label.txt
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var height = this.props.height - this.props.bottomBarHeight;
      var yMin = 0;
      var yMax = Math.max.apply(Math, _toConsumableArray(this.props.data.map(function (point) {
        return point.value;
      }))) * 1.25;
      var ySpread = yMax - yMin;
      var yScale = height / (ySpread || 1);
      var yAxis = this.describeYAxis(yMin, ySpread, yScale);

      var barSpacing = this.props.width / this.props.data.length;
      var barSize = this.props.barSize === -1 ? barSpacing : this.props.barSize;

      return _react2.default.createElement(
        'svg',
        { width: this.props.width, height: this.props.height },
        yAxis.gridLines.map(this.renderYGridLine.bind(this)),
        this.props.data.map(function (item, i) {
          return _react2.default.createElement(
            'g',
            { key: 'bar.item.' + i },
            _react2.default.createElement('rect', {
              fill: _this3.props.barColor,
              width: barSize,
              height: item.value * yScale,
              y: height - item.value * yScale,
              x: i * barSpacing - barSize / 2 + barSpacing / 2 - barSize / 2
            }),
            _this3.renderTip(i, item.value + (_this3.props.isPercent ? '%' : ''), i * barSpacing - barSize / 2 + barSpacing / 2, height - item.value * yScale)
          );
        }),
        yAxis.labels.map(this.renderLabel.bind(this)),
        this.props.data.map(function (item, i) {
          return _react2.default.createElement(
            'text',
            {
              key: 'graph.xAxis.label.' + i,
              x: i * barSpacing - barSize / 2 + barSpacing / 2 - 5,
              y: height + _this3.props.bottomBarHeight,
              fill: _this3.props.labelColor,
              style: { fontSize: _this3.props.labelFontSize, textShadow: _this3.props.labelTextShadow }
            },
            item.label
          );
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
  barSize: 20,
  barRailColor: null,
  barColor: '#408AE5',
  gridColor: 'rgba(230,230,230,.5)',
  label: 'N/A',
  width: 400,
  height: 200,
  bottomBarHeight: 20,
  yLabelsOutside: true,
  labelFontSize: 12,
  labelTextShadow: '1px 1px #fff',
  labelColor: '#555',
  isPercent: false,
  labelTemplate: '{{value}}' };
Bar.propTypes = {
  metricName: _react2.default.PropTypes.string,
  barSize: _react2.default.PropTypes.number,
  label: _react2.default.PropTypes.string,
  metricColor: _react2.default.PropTypes.string,
  barColor: _react2.default.PropTypes.string,
  barRailColor: _react2.default.PropTypes.string
};
exports.default = Bar;