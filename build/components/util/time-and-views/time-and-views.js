'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TimeAndViews);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimeAndViews.__proto__ || Object.getPrototypeOf(TimeAndViews)).call.apply(_ref, [this].concat(args))), _this), _this.trans = DM_ENV['utils/time-and-views'], _this.defaultProps = {
      views: null,
      time: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimeAndViews, [{
    key: 'timesince',
    value: function timesince(val) {
      var date = typeof val === 'number' ? new Date(val * 1000) : (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? val : new Date(),
          now = new Date();

      var diff = (now - date) / 36e5;

      if (diff > 17520) return _react2.default.createElement(
        _trans2.default,
        { context: this.trans, years: Math.round(diff / 8760), n: Math.round(diff / 8760) },
        '%(years)s years ago'
      );else if (diff > 8760) return _react2.default.createElement(
        _trans2.default,
        { context: this.trans },
        'last year'
      );else if (diff > 1440) {
        var monthName = "";
        try {
          monthName = this.trans.months[date.getMonth()];
        } catch (e) {
          if (_trans.DEBUG) console.warn('Trans error: ', e);
          return _react2.default.createElement(
            _trans2.default,
            { context: this.trans },
            'A few months ago'
          );
        }
        return _react2.default.createElement(
          _trans2.default,
          { context: this.trans, month: monthName },
          'last %(month)s'
        );
      } else if (diff > 720) return _react2.default.createElement(
        _trans2.default,
        { context: this.trans },
        'last month'
      );else if (diff > 336) return _react2.default.createElement(
        _trans2.default,
        { context: this.trans, weeks: Math.round(diff / 168), n: Math.round(diff / 168) },
        '%(weeks)s weeks ago'
      );else if (diff > 168) return _react2.default.createElement(
        _trans2.default,
        { context: this.trans },
        'a week ago'
      );else if (diff > 48) {
        var dayName = "";
        try {
          dayName = this.trans.days[date.getDay()];
        } catch (e) {
          console.warn('Trans error: ', e);
          return _react2.default.createElement(
            _trans2.default,
            { context: this.trans },
            'A few days ago'
          );
        }
        return _react2.default.createElement(
          _trans2.default,
          { context: this.trans, day: this.trans.days[date.getDay()] },
          'last %(day)s'
        );
      } else if (diff > 24) return _react2.default.createElement(
        _trans2.default,
        { context: this.trans },
        'yesterday'
      );else if (diff > 1) return _react2.default.createElement(
        _trans2.default,
        { context: this.trans, hours: Math.round(diff), n: Math.round(diff) },
        '%(hours)s hours ago'
      );
      return _react2.default.createElement(
        _trans2.default,
        { context: this.trans },
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
        { context: this.trans, views: this.number(this.props.views), n: this.props.views },
        '{views} views'
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