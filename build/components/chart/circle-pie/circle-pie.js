'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chart = require('../chart/chart');

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CirclePie = function (_Component) {
  _inherits(CirclePie, _Component);

  function CirclePie() {
    _classCallCheck(this, CirclePie);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CirclePie).apply(this, arguments));
  }

  _createClass(CirclePie, [{
    key: 'polarToCartesian',
    value: function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
      var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
      };
    }
  }, {
    key: 'describeArc',
    value: function describeArc(x, y, radius, startAngle, endAngle) {
      if (!x || !y) console.error('x or y missing to describeArc');

      var start = this.polarToCartesian(x, y, radius, endAngle),
          end = this.polarToCartesian(x, y, radius, startAngle),
          arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

      return ["M", start.x, start.y, "A", radius, radius, 0, arcSweep, 0, end.x, end.y].join(" ");
    }
  }, {
    key: 'render',
    value: function render() {
      var radius = this.props.width / 2 - this.props.strokeWidth / 2 - this.props.padding,
          center = radius + this.props.strokeWidth / 2 + this.props.padding,
          startAngle = 0,
          endAngle = 3.6 * this.props.percent,
          label = this.props.percent + '%',
          labelLeftOffset = label.length * -0.4 + 0.5,
          arc = this.describeArc(center, center, radius, startAngle, endAngle);

      return _react2.default.createElement(
        _chart2.default,
        { width: this.props.width, height: this.props.height, border: this.props.border },
        _react2.default.createElement('circle', {
          cx: center,
          cy: center,
          r: radius,
          fill: this.props.fillColor,
          stroke: this.props.railColor,
          strokeWidth: this.props.strokeWidth }),
        _react2.default.createElement('path', {
          fill: this.props.fillColor,
          stroke: this.props.strokeColor,
          strokeWidth: this.props.strokeWidth,
          d: arc }),
        _react2.default.createElement(
          'text',
          {
            x: center,
            y: center,
            dx: labelLeftOffset + 'em',
            dy: '.45em',
            fill: this.props.labelColor,
            fontWeight: this.props.labelFontWeight,
            fontSize: this.props.labelFontSize },
          label
        )
      );
    }
  }]);

  return CirclePie;
}(_react.Component);

CirclePie.propTypes = {
  width: _react2.default.PropTypes.number,
  height: _react2.default.PropTypes.number,
  strokeWidth: _react2.default.PropTypes.number,
  strokeColor: _react2.default.PropTypes.string,
  labelFontWeight: _react2.default.PropTypes.string,
  labelFontSize: _react2.default.PropTypes.string,
  fillColor: _react2.default.PropTypes.string,
  startAngle: _react2.default.PropTypes.number,
  endAngle: _react2.default.PropTypes.number,
  radius: _react2.default.PropTypes.number
};
CirclePie.defaultProps = {
  width: 150,
  height: 150,
  border: 'none',
  strokeWidth: 10,
  labelColor: '#408AE5',
  labelFontSize: '1.2em',
  labelFontWeight: 'bold',
  strokeColor: '#408AE5',
  railColor: '#f5f5f5',
  fillColor: 'none',
  percent: 70,
  padding: 0
};
exports.default = CirclePie;