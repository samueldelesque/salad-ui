'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _trans = require('../trans/trans');

var _trans2 = _interopRequireDefault(_trans);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeAndViews = function (_React$Component) {
  _inherits(TimeAndViews, _React$Component);

  function TimeAndViews() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, TimeAndViews);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TimeAndViews)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.trans = DM_ENV['utils/time-and-views'], _this.defaultProps = {
      views: null,
      uploaded: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimeAndViews, [{
    key: 'timesince',
    value: function timesince(val) {
      var date = new Date(val * 1000);
      var now = new Date();

      var diff = (now - date) / 36e5;

      if (!val || typeof val !== 'number') return null;else if (diff > 17520) return _react2.default.createElement(
        _trans2.default,
        { context: this.trans, years: Math.round(diff / 8760), isPlural: Math.round(diff / 8760) !== 1 },
        '%(years)s years ago'
      );else if (diff > 8760) return this.trans['last year'];else if (diff > 1440) return _react2.default.createElement(
        _trans2.default,
        { context: this.trans, month: this.trans.months[date.getMonth()] },
        'last %(month)s'
      );else if (diff > 720) return this.trans['last month'];else if (diff > 336) return _react2.default.createElement(
        _trans2.default,
        { context: this.trans, weeks: Math.round(diff / 168), isPlural: Math.round(diff / 168) !== 1 },
        '%(weeks)s weeks ago'
      );else if (diff > 168) return this.trans['a week ago'];else if (diff > 48) return _react2.default.createElement(
        _trans2.default,
        { context: this.trans, day: this.trans.days[date.getDay()] },
        'last %(day)s'
      );else if (diff > 24) return this.trans['yesterday'];else if (diff > 1) return _react2.default.createElement(
        _trans2.default,
        { context: this.trans, hours: Math.round(diff), isPlural: diff !== 1 },
        '%(hours)s hours ago'
      );
      return _react2.default.createElement(
        _trans2.default,
        null,
        'a few minutes ago'
      );
    }
  }, {
    key: 'number',
    value: function number(val) {
      if (val > 1000000) return Math.round(val / 1000000) + 'M';
      if (val > 1000) return Math.round(val / 1000) + 'K';
      return val;
    }
  }, {
    key: 'render',
    value: function render() {
      var parts = [];

      if (this.props.time !== null) parts.push(this.timesince(this.props.time));

      if (this.props.views !== null) parts.push(_react2.default.createElement(
        _trans2.default,
        { context: this.trans, views: this.number(this.props.views) },
        '%(views)s views'
      ));

      return _react2.default.createElement(
        'div',
        { style: { fontSize: '0.875rem', color: '#BFBFBF' } },
        parts.map(function (part, i) {
          return _react2.default.createElement(
            'span',
            { key: Math.random() + i },
            i > 0 ? ' • ' : null,
            part
          );
        })
      );
    }
  }]);

  return TimeAndViews;
}(_react2.default.Component);

exports.default = TimeAndViews;