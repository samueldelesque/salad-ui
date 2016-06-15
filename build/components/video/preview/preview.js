'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mediaTypes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _badge = require('../../util/badge/badge');

var _badge2 = _interopRequireDefault(_badge);

var _trans = require('../../util/trans/trans');

var _trans2 = _interopRequireDefault(_trans);

var _textClamp = require('../../util/text-clamp/text-clamp');

var _textClamp2 = _interopRequireDefault(_textClamp);

var _timeAndViews = require('../../util/time-and-views/time-and-views');

var _timeAndViews2 = _interopRequireDefault(_timeAndViews);

var _stylesheet = require('./_stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mediaTypes = exports.mediaTypes = {
  video: {
    fields: ['id', 'uri', 'duration', 'record_status', 'duration_formatted', 'title', 'onair', 'views_total', 'created_time', 'thumbnail_240_url']
  },
  playlist: {
    fields: ['id', 'uri', 'name', 'description', 'videos_total', 'owner.username', 'owner.screenname', 'thumbnail_240_url']
  }
};

var Preview = function (_Component) {
  _inherits(Preview, _Component);

  function Preview() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Preview);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Preview)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.trans = DM_ENV['video/preview'], _this.state = {
      hovered: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Preview, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var type = 'duration',
          label = '',
          previewStyles = _stylesheet2.default[this.props.type];

      if (this.props.mediaType === 'video') {
        label = this.props.duration_formatted;
        var isRecording = this.props.record_status && this.props.record_status !== 'stopped';

        if (this.props.onair) {
          type = 'live';
          label = _react2.default.createElement(
            _trans2.default,
            { context: this.trans },
            'LIVE'
          );
        } else if (isRecording) {
          type = 'recording';
          var duration = _moment2.default.duration({ seconds: _moment2.default.utc().unix() - this.props.created_time }),
              s = duration.seconds(),
              m = duration.minutes(),
              h = duration.hours();

          label = (m > 9 ? m : '0' + m) + ':' + (s > 9 ? s : '0' + s);
          if (duration.hours()) {
            label = (h > 9 ? h : '0' + h) + ':' + label;
          }
        }
      } else if (this.props.mediaType === 'playlist') {
        label = _react2.default.createElement(
          'span',
          null,
          this.props.videos_total + ' ',
          _react2.default.createElement(
            _trans2.default,
            { context: this.trans },
            'videos'
          )
        );
      }

      var height = this.props.height || this.props.width / 1.77 || previewStyles.image.height,
          width = this.props.width || previewStyles.image.width;

      return _react2.default.createElement(
        'div',
        {
          onMouseOver: function onMouseOver() {
            return _this2.setState({ hovered: true });
          },
          onMouseOut: function onMouseOut() {
            return _this2.setState({ hovered: false });
          },
          style: previewStyles.preview },
        _react2.default.createElement(
          'div',
          { style: {
              position: 'relative',
              display: 'inline-block', //non flex fallback
              height: height,
              width: width
            } },
          _react2.default.createElement(
            'a',
            { href: this.props.uri, style: { display: 'block', overflow: 'hidden' } },
            _react2.default.createElement('div', { className: 'transition-md ' + (this.state.hovered ? 'zoom-md' : ''), style: {
                backgroundImage: 'url(' + this.props.thumbnail_240_url + ')',
                backgroundSize: 'cover',
                height: height,
                width: width
              } }),
            _react2.default.createElement('div', { style: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1
              } }),
            _react2.default.createElement(
              _badge2.default,
              { position: 'btm-end', type: type },
              label
            ),
            this.props.playing ? _react2.default.createElement(
              _badge2.default,
              { position: 'top-start', type: 'staff' },
              _react2.default.createElement(
                _trans2.default,
                { context: this.trans },
                'Now playing'
              )
            ) : null
          )
        ),
        _react2.default.createElement(
          'div',
          { style: previewStyles.text },
          _react2.default.createElement(
            'h4',
            { style: previewStyles.title },
            _react2.default.createElement(
              'a',
              { href: this.props.uri, style: {
                  textDecoration: this.state.hovered ? 'underline' : 'none',
                  color: _stylesheet2.default.link.color
                } },
              _react2.default.createElement(
                _textClamp2.default,
                { clamp: '2' },
                this.props.mediaType === 'video' ? this.props.title : this.props.name
              )
            )
          ),
          this.props.mediaType === 'video' ? _react2.default.createElement(_timeAndViews2.default, { noUploadLabel: true, time: this.props.created_time, views: this.props.views_total }) : null
        ),
        _react2.default.createElement('span', { style: _stylesheet2.default.after })
      );
    }
  }]);

  return Preview;
}(_react.Component);

Preview.propTypes = {
  type: _react2.default.PropTypes.oneOf(['list', 'grid']),
  mediaType: _react2.default.PropTypes.oneOf(['video', 'playlist']),
  width: _react2.default.PropTypes.number
};
Preview.defaultProps = {
  type: 'grid',
  pixelle: false,
  playing: false,
  mediaType: 'video',
  width: 120
};
exports.default = Preview;