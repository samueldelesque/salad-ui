'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fetchMethods = require('../../../lib/fetch-methods');

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
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(List)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.currentPage = 1, _this.lastQuery = null, _this.videos = [], _this.hasMore = false, _this.state = {
      videos: [],
      failed: false,
      hasMore: false,
      loading: false,
      searching: false,
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
      if (this.hasPropsChanged(this.props, nextProps)) {
        this.currentPage = 1;
        if (this.refs.container) this.refs.container.style.opacity = .4;
        this.loadVideos('replaceVideos', nextProps);
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
      if (videos.length === 0 && this.props.ifEmpty) this.props.ifEmpty();
      this.videos = videos;
      this.hasMore = hasMore;
      this.replaceVideos(videos, hasMore);
    }
  }, {
    key: 'loadVideos',
    value: function loadVideos(cb, props) {
      var _this2 = this;

      if (!this.props.mediaType) console.error('No mediaType provided to Grid.');
      this.setState({ loading: true });
      var data = {
        fields: _preview.mediaTypes[this.props.mediaType].fields.join(','),
        page: this.currentPage,
        thumbnail_ratio: 'widescreen',
        sort: props.sortSelection || props.sortBy,
        limit: props.limit,
        localization: 'en_ZH' //must pass a non-existent language in order to have sort working in current API (lol)
      };
      var endpoint = props.endpoint ? props.endpoint : '/videos';
      if (props.searchTerm) data.search = props.searchTerm;
      if (props.flags && props.flags.length) data.flags = props.flags.join(',');

      (0, _fetchMethods.get)(this.props.apiURL + endpoint, { data: data }).then(function (res) {
        return _this2[cb](res.list, res.has_more);
      }).catch(function (err) {
        console.error('Failed to fetch videos', query, err);
        _this2.setState({ failed: _this2.currentPage === 1, hasMore: false, searching: false, loading: false });
      });
    }
  }, {
    key: 'appendVideos',
    value: function appendVideos(videos, hasMore) {
      this.setState({ hasMore: hasMore, videos: this.state.videos.concat(videos), failed: false, loading: false });
      this.refs.container.style.opacity = 1;
      this.currentPage++;
    }
  }, {
    key: 'replaceVideos',
    value: function replaceVideos(videos, hasMore) {
      this.setState({ hasMore: hasMore, videos: videos, loading: false, failed: false });
      this.refs.container.style.opacity = 1;
      this.currentPage++;
    }
  }, {
    key: 'loadMore',
    value: function loadMore() {
      this.loadVideos('appendVideos', this.props);
    }

    // renderVideos() {
    //   return this.state.videos.map((video,index) =>
    //     <Preview
    //       key={'vid.item.'+index}
    //       type="grid"
    //       {...this.props}
    //       {...video}
    //     />
    //   )
    // }

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'video-list' },
        _react2.default.Children.map(this.props.children, function (item, index) {
          return _react2.default.cloneElement(item, Object.assign({}, _this3.props, _this3.state, item.props, { loadMore: function loadMore() {
              return _this3.loadMore();
            } }));
        })
      );
    }
  }]);

  return List;
}(_react2.default.Component);

// Example use:

// class GridArea extends React.Component{
//   render(){
//     return (
//       <Grid>
//         {this.props.videos.map((video,index)=><Preview key={`video.${index}`} type="grid" {...video}/>)}
//       </Grid>
//     )
//   }
// }
// class LoadMore extends React.Component{
//   render(){
//     return (
//       <Button onPress={()=>this.props.loadMore()}>
//         Load More
//       </Button>
//     )
//   }
// }
// class Page extends React.Component{
//   render(){
//     return (
//       <View style={{border: '2px solid'}}>
//         <VideoList>
//           <GridArea/>
//           <LoadMore/>
//         </VideoList>
//       </View>
//     )
//   }
// }


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
  colSize: 3,
  searchTerm: null,
  mediaType: 'video'
};
exports.default = List;