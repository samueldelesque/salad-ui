'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _http = require('../../../lib/http');

var _grid = require('../../util/grid/grid');

var _grid2 = _interopRequireDefault(_grid);

var _preview = require('../preview/preview');

var _preview2 = _interopRequireDefault(_preview);

var _button = require('../../util/button/button');

var _button2 = _interopRequireDefault(_button);

var _trans = require('../../util/trans/trans');

var _trans2 = _interopRequireDefault(_trans);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      videos: [],
      failed: false,
      currentPage: 1,
      hasMore: false,
      isLoading: false,
      searching: false,
      initialVideos: {
        videos: [],
        hasMore: false
      },
      err: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(List, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadVideos('setInitialVideos', this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.hasPropsChanged(this.props, nextProps)) {
        this.setState({ currentPage: 1 }, function () {
          _this2.loadVideos('replaceVideos', nextProps);
        });
      }
    }
  }, {
    key: 'hasPropsChanged',
    value: function hasPropsChanged(oldProps, nextProps) {
      return JSON.stringify({
        sortBy: oldProps.sortBy,
        limit: oldProps.limit,
        flags: (oldProps.flags || []).join(','),
        endpoint: oldProps.endpoint,
        searchTerm: oldProps.searchTerm
      }) !== JSON.stringify({
        sortBy: nextProps.sortBy,
        limit: nextProps.limit,
        flags: (nextProps.flags || []).join(','),
        endpoint: nextProps.endpoint,
        searchTerm: nextProps.searchTerm
      });
    }

    // Allow us to store the first set of videos to avoid hitting API after a search

  }, {
    key: 'setInitialVideos',
    value: function setInitialVideos(videos, hasMore) {
      var _this3 = this;

      if (videos.length === 0 && this.props.ifEmpty) this.props.ifEmpty();
      this.setState({ initialVideos: { videos: videos, hasMore: hasMore } }, function () {
        _this3.replaceVideos(videos, hasMore);
      });
    }
  }, {
    key: 'loadVideos',
    value: function loadVideos(cb, props) {
      var _this4 = this;

      if (!this.props.mediaType) console.error('No mediaType provided to Grid.');
      this.setState({ isLoading: true });
      var data = {
        fields: _preview.mediaTypes[this.props.mediaType].fields.join(','),
        page: this.state.currentPage,
        thumbnail_ratio: 'widescreen',
        sort: props.sortSelection || props.sortBy,
        limit: props.limit,
        localization: 'en_ZH' //must pass a non-existent language in order to have sort working in current API (lol)
      };
      var headers = {};
      if (this.props.accessToken) headers.authorization = 'Bearer ' + this.props.accessToken;
      if (this.props.user) data.user = this.props.user;
      if (this.props.excludeIds) data.exclude_ids = this.props.excludeIds;

      var endpoint = props.endpoint ? props.endpoint : '/videos';
      if (props.searchTerm) data.search = props.searchTerm;
      if (props.flags && props.flags.length) data.flags = props.flags.join(',');

      (0, _http.get)(this.props.apiURL + endpoint, { data: data, headers: headers }).then(function (res) {
        return _this4[cb](res.list, res.has_more);
      }).catch(function (err) {
        console.error('Failed to fetch videos', err);
        _this4.setState({ failed: _this4.state.currentPage === 1, hasMore: false, searching: false, isLoading: false });
      });
    }
  }, {
    key: 'appendVideos',
    value: function appendVideos(videos, hasMore) {
      this.setState({ hasMore: hasMore, videos: this.state.videos.concat(videos), failed: false, isLoading: false, currentPage: this.state.currentPage + 1 });
      this.refs.container.style.opacity = 1;
    }
  }, {
    key: 'replaceVideos',
    value: function replaceVideos(videos, hasMore) {
      this.setState({ hasMore: hasMore, videos: videos, isLoading: false, failed: false, currentPage: this.state.currentPage + 1 });
      this.refs.container.style.opacity = 1;
    }
  }, {
    key: 'loadMore',
    value: function loadMore() {
      this.loadVideos('appendVideos', this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      return _react2.default.createElement(
        'div',
        { className: 'video-list', ref: 'container' },
        _react2.default.Children.map(this.props.children, function (item, index) {
          return _react2.default.cloneElement(item, Object.assign({}, _this5.props, _this5.state, item.props, { loadMore: function loadMore() {
              return _this5.loadMore();
            } }));
        })
      );
    }
  }]);

  return List;
}(_react2.default.Component);

List.propTypes = {
  sortBy: _react2.default.PropTypes.string,
  limit: _react2.default.PropTypes.number,
  flags: _react2.default.PropTypes.array,
  endpoint: _react2.default.PropTypes.string,
  searchTerm: _react2.default.PropTypes.string,
  mediaType: _react2.default.PropTypes.oneOf(['video', 'playlist'])
};
List.defaultProps = {
  sortBy: 'recent',
  limit: 3,
  flags: [],
  endpoint: '/videos',
  accessToken: null,
  colSize: 3,
  searchTerm: null,
  mediaType: 'video'
};
exports.default = List;