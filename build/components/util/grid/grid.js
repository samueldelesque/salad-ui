'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Grid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Grid.__proto__ || Object.getPrototypeOf(Grid)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      items: [],
      width: 660,
      breakPoint: { columns: 3, width: 660 }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Grid, [{
    key: 'getBreakPoint',
    value: function getBreakPoint(breakPoints, width) {
      var breakPoint = breakPoints[0];
      var diff = Math.abs(breakPoint.width - width);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = breakPoints.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              index = _step$value[0],
              bp = _step$value[1];

          var newdiff = Math.abs(bp.width - width);
          if (newdiff < diff) {
            breakPoint = bp;
            diff = newdiff;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return breakPoint;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.onResize = this.onResize.bind(this);
      this.onResize();
      window.addEventListener('resize', this.onResize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: 'onResize',
    value: function onResize() {
      var width = this.container.getBoundingClientRect().width;
      var breakPoint = this.getBreakPoint(this.props.breakPoints, width);
      this.setState({ width: width, breakPoint: breakPoint });
    }
  }, {
    key: 'renderItems',
    value: function renderItems(items) {
      var _this2 = this;

      var containerWidth = this.state.width,
          width = (containerWidth - 20 * (this.state.breakPoint.columns - 1)) / this.state.breakPoint.columns;

      return _react2.default.Children.map(items, function (item, index) {
        var itemStyles = Object.assign({}, item.props.styles, {
          width: width,
          marginRight: (index + 1) % _this2.state.breakPoint.columns !== 0 ? 20 : 0,
          marginBottom: 20,
          flexGrow: 'grow',
          display: 'inline-block' });
        //non flex fallback
        return _react2.default.createElement(
          'div',
          { key: 'vid.' + index, style: itemStyles },
          _react2.default.cloneElement(item, Object.assign({}, item.props, { width: width }))
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { ref: function ref(_ref2) {
            return _this3.container = _ref2;
          }, style: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
          } },
        this.renderItems(this.props.children)
      );
    }
  }]);

  return Grid;
}(_react2.default.Component);

Grid.defaultProps = {
  breakPoints: [{ columns: 1, width: 220 }, { columns: 2, width: 440 }, { columns: 3, width: 660 }, { columns: 4, width: 880 }, { columns: 5, width: 1100 }, { columns: 6, width: 1320 }, { columns: 7, width: 1540 }, { columns: 8, width: 1760 }, { columns: 9, width: 1980 }, { columns: 10, width: 2200 }]
};
exports.default = Grid;