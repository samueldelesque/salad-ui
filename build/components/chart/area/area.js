'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _formatter = require('../../../lib/formatter');

var _chart = require('../chart/chart');

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 *   - x axis is always time.
 *   - data is given as [{time: TIMESTAMP, value: VALUE, label: LABEL}]
 *   - TIMESTAMP is in UNIX_MS
 *   - @TODO:
          • multiple lines as [[{time: TIMESTAMP, value: VALUE}, ...], [{time: TIMESTAMP, value: VALUE}, ...] ...])
 *
 *
 */

var Area = function (_Component) {
  _inherits(Area, _Component);

  function Area() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Area);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Area.__proto__ || Object.getPrototypeOf(Area)).call.apply(_ref, [this].concat(args))), _this), _this.tipsData = {}, _this.xAxisLabels = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Area, [{
    key: 'describeLine',
    value: function describeLine(data, xMin, yMin, xSpread, ySpread, xScale, yScale) {
      var _this2 = this;

      var isZero = ySpread === 0 && yMin === 0;
      return data.map(function (point, index) {
        return Math.max(0, (point.time - xMin) * xScale - _this2.props.strokeWidth) + ',' + (isZero ? yScale : (ySpread - (point.value - yMin)) * yScale);
      }).join(' ');
    }
  }, {
    key: 'centerElement',
    value: function centerElement(el, center, width) {
      var setWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (setWidth) el.setAttribute('width', width);
      var xPos = center - width / 2;
      // if(xPos + this.props.maxOverflow < 0) xPos = -this.props.maxOverflow
      // if(xPos + width - this.props.maxOverflow > this.activeWidth) xPos = this.activeWidth - width + this.props.maxOverflow
      el.setAttribute('x', xPos);
    }
  }, {
    key: 'showPointTip',
    value: function showPointTip(point, event) {
      var scope = this.refs[point.ref],
          background = scope.getElementsByClassName('tip-background')[0],
          textDate = scope.getElementsByClassName('tip-text-date')[0],
          textValue = scope.getElementsByClassName('tip-text-value')[0];

      this.centerElement(textDate, this.tipsData[point.ref].xBase, textDate.getBBox().width);
      this.centerElement(textValue, this.tipsData[point.ref].xBase, textValue.getBBox().width);
      this.centerElement(background, this.tipsData[point.ref].xBase, Math.max(textDate.getBBox().width, textValue.getBBox().width) + this.props.tipsPadding * 2, true);
      scope.style.display = 'block';
    }
  }, {
    key: 'hidePointTip',
    value: function hidePointTip(point, event) {
      this.refs[point.ref].style.display = 'none';
    }
  }, {
    key: 'renderTipText',
    value: function renderTipText(template, data) {
      if (typeof template === 'function') {
        return template(data);
      } else if (typeof template === 'string') {
        return template.replace('{{date}}', (0, _moment2.default)(data.date).format(data.dateFormat || 'YYYY-MM-DD')).replace('{{date1}}', (0, _moment2.default)(data.date1).format(data.dateFormat || 'YYYY-MM-DD')).replace('{{date2}}', (0, _moment2.default)(data.date2).format(data.dateFormat || 'YYYY-MM-DD')).replace('{{value}}', (0, _formatter.formatNumber)(data.value));
      } else {
        throw new Error('Invalid labelTemplate type!');
      }
    }
  }, {
    key: 'renderTips',
    value: function renderTips(data, xMin, yMin, xSpread, ySpread, xScale, yScale) {
      var _this3 = this;

      var intervalLength = void 0,
          dateFormat = void 0,
          tipText = '{{date}}',
          followingTime = void 0,
          label = '{{value}} views',
          day = 86400000,
          isZero = ySpread === 0 && yMin === 0;

      if (data.length === 0) return;else if (data.length === 1) intervalLength = 0;else intervalLength = data[1].time - data[0].time;

      // if(data[0].label) label = data[0].label

      if (xSpread > day * 365 * 7) dateFormat = 'YYYY'; // > 7 years
      else if (xSpread > day * 30 * 9) dateFormat = 'MMM'; // > 9 Months
        else if (xSpread > day * 7) dateFormat = 'MMM Do'; // > a week
          else if (xSpread < day) dateFormat = 'LT';

      if (intervalLength > day * 27 && intervalLength < day * 32) {
        //roughly one month
        dateFormat = 'MMMM';
      } else if (intervalLength > day) {
        //more than 1d
        dateFormat = 'MMM Do';
        tipText = '{{date1}} through {{date2}}';
      } else if (xSpread < day) {
        dateFormat = 'LT';
      } else {
        dateFormat = 'MMM Do';
      }

      return data.map(function (point, index) {
        if ((index === 0 || index === data.length - 1) && !_this3.props.showFirstAndLastTip) return;
        if (data[index + 1]) followingTime = data[index + 1].time;else followingTime = point.time + intervalLength;
        if (!point.label) point.label = label;

        var xBase = (point.time - xMin) * xScale,
            key = 'point_' + index + '_tooltip',
            pointTimeFormat = dateFormat,
            tipHeight = 38,
            tipOffset = 25,
            yBase = (isZero ? yScale : (ySpread - (point.value - yMin)) * yScale) - _this3.props.tipsPadding / 2,
            triangleWidth = 25,
            triagleHeight = 10,
            trianglePath = [xBase - _this3.props.tipStrokeWidth - triangleWidth / 2 + ',' + (yBase - tipOffset + 9), xBase - _this3.props.tipStrokeWidth + triangleWidth / 2 + ',' + (yBase - tipOffset + 9), xBase - _this3.props.tipStrokeWidth + ',' + (yBase - tipOffset + triagleHeight + 9)].join(' '),
            triangleBorderPath = [xBase - _this3.props.tipStrokeWidth - triangleWidth / 2 + ',' + (yBase - tipOffset + 10), xBase - _this3.props.tipStrokeWidth + triangleWidth / 2 + ',' + (yBase - tipOffset + 10), xBase - _this3.props.tipStrokeWidth + ',' + (yBase - tipOffset + triagleHeight + 10)].join(' ');

        _this3.tipsData[key] = { xBase: xBase };

        if (new Date(point.time).getFullYear() !== new Date().getFullYear()) {
          pointTimeFormat += ' YYYY';
        }

        return _react2.default.createElement(
          'g',
          { key: 'point-' + index, ref: key, style: { display: 'none', position: 'relative', zIndex: 4 }, className: 'value-tip' },
          _react2.default.createElement('rect', {
            className: 'tip-background',
            x: (point.time - xMin) * xScale - _this3.props.strokeWidth - _this3.props.tipsWidth / 2,
            y: yBase - tipHeight - tipOffset,
            width: _this3.props.tipsWidth + _this3.props.tipsPadding,
            height: tipHeight + _this3.props.tipsPadding,
            style: { stroke: _this3.props.tipStrokeColor, strokeWidth: _this3.props.tipStrokeWidth, fill: _this3.props.tipsFill }
          }),
          _react2.default.createElement('polygon', {
            points: triangleBorderPath,
            style: { stroke: _this3.props.tipStrokeColor, opacity: 0.5, strokeWidth: _this3.props.tipStrokeWidth }
          }),
          _react2.default.createElement('polygon', {
            points: trianglePath,
            style: { fill: _this3.props.tipsFill }
          }),
          _react2.default.createElement('text', {
            className: 'tip-text-date',
            x: xBase - _this3.props.tipsWidth / 2 + 2,
            y: yBase - _this3.props.strokeWidth - tipHeight - tipOffset + _this3.props.tipsPadding + 10,
            style: { fontSize: 14, fontWeight: 'light' },
            dangerouslySetInnerHTML: { __html: _this3.renderTipText(tipText, { dateFormat: pointTimeFormat, date: point.time, date1: point.time, date2: followingTime, value: point.value }) }
          }),
          _react2.default.createElement('text', {
            className: 'tip-text-value',
            x: xBase - _this3.props.tipsWidth / 2 + 2,
            y: yBase - _this3.props.strokeWidth - tipHeight - tipOffset + _this3.props.tipsPadding + 30,
            style: { fontSize: 16, fontWeight: 'bold' },
            dangerouslySetInnerHTML: { __html: _this3.renderTipText(_this3.props.labelTemplate, { value: point.value, date: point.time }) }
          })
        );
      });
    }
  }, {
    key: 'renderPoints',
    value: function renderPoints(data, xMin, yMin, xSpread, ySpread, xScale, yScale) {
      var _this4 = this;

      var isZero = ySpread === 0 && yMin === 0;
      return data.map(function (point, index) {
        if ((index === 0 || index === data.length - 1) && !_this4.props.showFirstAndLastTip) return;
        return _react2.default.createElement('circle', {
          key: 'point-' + index,
          cx: (point.time - xMin) * xScale - _this4.props.strokeWidth / 2,
          cy: isZero ? yScale : (ySpread - (point.value - yMin)) * yScale,
          r: _this4.props.pointsRadius,
          onMouseOver: _this4.showPointTip.bind(_this4, { ref: 'point_' + index + '_tooltip' }),
          onMouseLeave: _this4.hidePointTip.bind(_this4, { ref: 'point_' + index + '_tooltip' }),
          style: { stroke: _this4.props.strokeColor, strokeWidth: _this4.props.strokeWidth, fill: 'white', cursor: 'default' }
        });
      });
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel(label, index) {
      if (!label.x) {
        if (this.props.yLabelsPosition === 'right') label.x = this.activeWidth + (this.props.yLabelsOutside ? 5 : -1 * (20 + 5 * (label.txt.length || 1)));else label.x = 20;
      }
      if (!label.ref) label.ref = 'label.' + index + ',' + label.x + ',' + label.y;
      return _react2.default.createElement(
        'text',
        {
          key: 'graph.xAxis.label.' + label.ref,
          x: label.x,
          y: label.y,
          ref: label.ref,
          fill: this.props.labelColor,
          style: { fontSize: this.props.labelFontSize, textShadow: this.props.labelTextShadow }
        },
        label.txt
      );
    }
  }, {
    key: 'renderYGridLine',
    value: function renderYGridLine(label, index) {
      return _react2.default.createElement('line', {
        key: 'graph.ygridLine.' + index,
        x1: '0',
        y1: label.y,
        x2: this.activeWidth - this.props.strokeWidth,
        y2: label.y,
        fill: this.props.labelColor,
        style: { stroke: this.props.gridColor, strokeWidth: 1 }
      });
    }
  }, {
    key: 'describeYAxis',
    value: function describeYAxis(yMin, ySpread, yScale) {
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
          var v = k * rule * 2;return { y: isZero ? yScale : (ySpread - k * rule * 2) * yScale, txt: (0, _formatter.formatNumber)(Math.round(v + yMin)) };
        })
      };
    }
  }, {
    key: 'reduceData',
    value: function reduceData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var startDate = arguments[1];

      var _this5 = this;

      var endDate = arguments[2];
      var maxPoints = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 12;

      var results = [];
      // Force each point ot have a time
      data.forEach(function (point, i) {
        if (!point.time) data[i].time = point.id || 0;results.push(point);
      });

      // Convert unix time to ms unix time
      // results.forEach((point, i)=>{if(results[i].format !== 'x'){results[i].time = parseFloat(point.time) * 1000;results[i].format = 'x'}})

      // Remove data which is out of range
      var s = parseFloat(startDate.format('x')),
          e = parseFloat(endDate.format('x'));

      results = results.filter(function (point) {
        return point.time >= s && point.time <= e;
      });

      // Limit number of points for given data set
      if (results.length > maxPoints) {
        var _ret2 = function () {
          var zScale = results.length / maxPoints,
              selectedRange = [];
          results.forEach(function (point, i) {
            var k = Math.floor(i / zScale),
                v = parseFloat(point.value);
            if (selectedRange[k]) selectedRange[k].value += v;else selectedRange[k] = { value: v, label: '{{value}} ' + point.label, time: point.time };
          });
          if (_this5.props.formula === 'mean') {
            return {
              v: selectedRange.map(function (point) {
                return _extends({}, point, { value: Math.round(point.value * 100 / zScale) / 100 });
              })
            };
          }
          return {
            v: selectedRange
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
      } else return results;
    }
  }, {
    key: 'describeXAxis',
    value: function describeXAxis(xMin, xSpread, xScale, data) {
      var _this6 = this;

      var keys = [1, 2, 3, 4, 5, 6, 7, 8, 9],
          keyInterval = data.length / keys.length,
          dateFormat = 'ddd',
          labels = [],
          day = 86400000;

      if (xMin < 10000) return { labels: [] }; // No timestamps given
      if (keys.length > data.length) {
        keys = data.map(function (p, i) {
          return i + 1;
        });
        keyInterval = 1;
      }
      if (xSpread > day * 365 * 7) dateFormat = 'YYYY'; // > 7 years
      else if (xSpread > day * 30 * 9) dateFormat = 'MMM'; // > 9 Months
        else if (xSpread > day * 7) dateFormat = 'MMM D'; // > a week
          else if (xSpread < day) dateFormat = 'LT';

      keys.forEach(function (k, i) {
        var time = xMin + k * (xSpread / keys.length);
        // Skip last item
        if (i < keys.length - 1) labels.push({
          txt: (0, _moment2.default)(time).format(dateFormat),
          time: time,
          x: (time - xMin) * xScale,
          y: _this6.activeHeight + 30,
          ref: 'xLabel.' + i
        });
      });

      this.xAxisLabels = labels;

      return {
        labels: labels
      };
    }
  }, {
    key: 'centerXAxisLabelMarkers',
    value: function centerXAxisLabelMarkers() {
      var _this7 = this;

      this.xAxisLabels.forEach(function (label) {
        var domLabel = _this7.refs[label.ref];
        _this7.centerElement(domLabel, label.x, domLabel.getBBox().width);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.centerXAxisLabelMarkers();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.centerXAxisLabelMarkers();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var data = this.props.data;

      this.activeWidth = this.props.width;
      this.activeHeight = this.props.height - 50; // add 50 px in the bottom for the labels

      // Let's ensure all data has a timeStamp
      data.forEach(function (point, index) {
        if (!point.time) {
          data[index].time = index;
        }
        if (!(point.time instanceof Date)) {
          data[index].time = new Date(data[index].time).getTime();
        }
      });

      data = data.sort(function (a, b) {
        return a.time === b.time ? 0 : a.time > b.time ? 1 : -1;
      });

      // let xMax = this.props.data.length - 1
      var xMax = Math.max.apply(Math, _toConsumableArray(data.map(function (point, index) {
        return point.time;
      })).concat([data.length]));
      var xMin = Math.min.apply(Math, _toConsumableArray(data.map(function (point, index) {
        return point.time;
      })));

      if (this.props.maxPoints !== -1) {
        data = this.reduceData(data, (0, _moment2.default)(xMin), (0, _moment2.default)(xMax), this.props.maxPoints);
        xMax = Math.max.apply(Math, _toConsumableArray(data.map(function (point, index) {
          return point.time;
        })).concat([data.length]));
      }

      var yMax = Math.max.apply(Math, _toConsumableArray(data.map(function (point) {
        return point.value;
      })));
      var yRoundup = Math.pow(10, String(Math.round(yMax)).length - 1);
      var yMultiplier = 1 + 1 / this.props.yPadding;
      var roundedYMax = Math.max(Math.ceil(yMax / yRoundup) * yRoundup, 1);
      var naturalYPadding = roundedYMax - yMax;

      var yMin = this.props.useDynamicYMin ? Math.min.apply(Math, _toConsumableArray(data.map(function (point) {
        return point.value;
      }))) - roundedYMax / 5 : 0;

      var xSpread = xMax - xMin;
      var ySpread = roundedYMax - yMin;
      var xScale = this.activeWidth / (xSpread || 1);
      var yScale = this.activeHeight / (ySpread || 1);

      var line = this.describeLine(data, xMin, yMin, xSpread, ySpread, xScale, yScale);
      var area = '0,' + ((isZero ? yScale : ySpread * yScale) - this.props.strokeWidth) + ' ' + line + ' ' + ((xMax - xMin) * xScale - this.props.strokeWidth) + ',' + ((isZero ? yScale : ySpread * yScale) - this.props.strokeWidth);
      var yAxis = this.describeYAxis(yMin, ySpread, yScale);
      var xAxis = this.describeXAxis(xMin, xSpread, xScale, data);

      var isZero = ySpread === 0 && yMin === 0;

      return _react2.default.createElement(
        _chart2.default,
        { width: this.props.width, height: this.props.height, type: 'area' },
        yAxis.gridLines.map(this.renderYGridLine.bind(this)),
        _react2.default.createElement('polygon', {
          points: area,
          style: { fill: this.props.fillColor, strokeWidth: 0 }
        }),
        _react2.default.createElement('polyline', {
          points: line,
          style: { stroke: this.props.strokeColor, strokeDasharray: this.props.strokeDasharray, strokeWidth: this.props.strokeWidth, fill: 'none' }
        }),
        yAxis.labels.map(this.renderLabel.bind(this)),
        xAxis.labels.map(function (label, index) {
          return _react2.default.createElement('line', {
            key: 'graph.xAxis.label.' + index,
            ref: label.ref + '.marker',
            x1: label.x,
            x2: label.x,
            y1: _this8.activeHeight,
            y2: _this8.activeHeight + 10,
            stroke: _this8.props.gridColor,
            strokeWidth: 1
          });
        }),
        xAxis.labels.map(this.renderLabel.bind(this)),
        this.renderPoints(data, xMin, yMin, xSpread, ySpread, xScale, yScale),
        this.renderTips(data, xMin, yMin, xSpread, ySpread, xScale, yScale)
      );
    }
  }]);

  return Area;
}(_react.Component);

Area.propTypes = {
  width: _react2.default.PropTypes.number,
  height: _react2.default.PropTypes.number,
  border: _react2.default.PropTypes.string,
  strokeWidth: _react2.default.PropTypes.number,
  useDynamicYMin: _react2.default.PropTypes.bool,
  strokeColor: _react2.default.PropTypes.string,
  strokeDasharray: _react2.default.PropTypes.number,
  pointsRadius: _react2.default.PropTypes.number,
  showFirstAndLastTip: _react2.default.PropTypes.bool,
  tipsWidth: _react2.default.PropTypes.number,
  tipsHeight: _react2.default.PropTypes.number,
  tipsPadding: _react2.default.PropTypes.number,
  tipStrokeWidth: _react2.default.PropTypes.number,
  tipStrokeColor: _react2.default.PropTypes.string,
  tipsFill: _react2.default.PropTypes.string,
  gridColor: _react2.default.PropTypes.string,
  labelFontSize: _react2.default.PropTypes.number,
  labelTextShadow: _react2.default.PropTypes.string,
  labelColor: _react2.default.PropTypes.string,
  fillColor: _react2.default.PropTypes.string,
  maxOverflow: _react2.default.PropTypes.number,
  maxPoints: _react2.default.PropTypes.number,
  yLabelsOutside: _react2.default.PropTypes.bool,
  yLabelsPosition: _react2.default.PropTypes.string,
  formula: _react2.default.PropTypes.string,
  yPadding: _react2.default.PropTypes.number,
  data: _react2.default.PropTypes.array
};
Area.defaultProps = {
  width: 640,
  height: 320,
  border: 'none',
  strokeWidth: 2,
  useDynamicYMin: false,
  strokeColor: '#408AE5',
  strokeDasharray: 0,
  pointsRadius: 5,
  showFirstAndLastTip: false,
  tipsWidth: 240,
  tipsHeight: 22,
  tipsPadding: 10,
  tipStrokeWidth: 1,
  tipStrokeColor: '#BBBBBB',
  tipsFill: 'white',
  gridColor: 'rgba(230,230,230,.5)',
  labelFontSize: 12,
  labelTextShadow: '1px 1px #fff',
  labelColor: '#555',
  labelTemplate: '{{value}}', // or function(value, date){ return value + "$ on " + date}
  fillColor: 'rgba(191, 216, 246, 0.3)',
  maxOverflow: 20,
  yLabelsOutside: false,
  yLabelsPosition: 'left',
  yPadding: 10,
  maxPoints: -1,
  formula: 'sum',
  data: []
};
exports.default = Area;