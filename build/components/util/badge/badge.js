'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../../icon/icon');

var _icon2 = _interopRequireDefault(_icon);

var _stylesheet = require('../../../lib/stylesheet/stylesheet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  display: 'inline-block',
  boxSizing: 'border-box',
  textTransform: 'uppercase',
  textAlign: 'center',
  color: 'white',
  padding: '3px',
  lineHeight: '1.2rem',
  height: 'auto',
  fontSize: '12px',
  whiteSpace: 'nowrap',
  zIndex: '2',
  position: 'relative',
  verticalAlign: 'middle',
  letterSpacing: '0.6px'
};

var Badge = function (_Component) {
  _inherits(Badge, _Component);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
  }

  _createClass(Badge, [{
    key: 'positionBadge',
    value: function positionBadge(position) {
      var styles = {};
      if (this.props.position === 'inline') {
        styles.display = 'inline-block';
        styles.marginLeft = 5;
        styles.marginRight = 5;
        return styles;
      }
      styles.position = 'absolute';
      styles.zIndex = '2';

      switch (this.props.position) {
        case 'top-start':
          styles.top = 5;
          styles.left = 5;
          break;
        case 'top-end':
          styles.top = 5;
          styles.right = 5;
          break;
        case 'btm-start':
          styles.bottom = 5;
          styles.left = 5;
          break;
        case 'btm-end':
          styles.bottom = 5;
          styles.right = 5;
          break;
      }
      return styles;
    }
  }, {
    key: 'colorizeBadge',
    value: function colorizeBadge(type) {
      var styles = {};
      switch (type) {
        case 'duration':
        case 'private':
        case 'admin-buttons':
        case 'recording':
        case 'private':
          styles.backgroundColor = 'rgba(0,0,0,0.6)';
          break;

        case 'recording':
          // let preprend = <div style={{
          //       marginTop: '10px',
          //       float: 'left',
          //       marginRight: '10px',
          //       width: '10px',
          //       height: '10px',
          //       borderRadius: '50%',
          //       backgroundColor: defaults.colors.red,
          //       verticalAlign: 'middle',
          //       animation: 'pulse 1s infinite alternate',
          //     }}/>
          break;

        case 'live':
        case 'count':
          styles.letterSpacing = '1px';
          styles.backgroundColor = _stylesheet.defaults.colors.red;
          break;

        case 'sponsored':
          styles.color = '#FFF';
          styles.backgroundColor = '#E09021';
          break;

        case 'partner':
          styles.backgroundColor = _stylesheet.defaults.colors.green;
          styles.color = '#FFF';
          break;

        case 'featured':
          styles.backgroundColor = _stylesheet.defaults.colors.dmBrand;
          styles.color = '#FFF';
          break;

        case 'verified':
          styles.backgroundColor = _stylesheet.defaults.colors.dmBrand;
          styles.width = 16;
          styles.height = 16;
          styles.transform = 'rotate(-45deg)';
          styles.color = '#FFF';
          break;

        case 'staff':
          styles.backgroundColor = _stylesheet.defaults.colors.dmBrand;
          styles.color = '#FFF';
          break;

        case 'substitute':
          styles.backgroundColor = _stylesheet.defaults.colors.purple;
          break;

        case 'price':
          styles.color = 'black';
          styles.backgroundColor = _stylesheet.defaults.colors.yellow;
          break;

        case 'tag':
          styles.backgroundColor = _stylesheet.defaults.colors.neutral5;
          styles.textTransform = 'uppercase';
          styles.color = _stylesheet.defaults.colors.neutral1;
          break;
      }
      return styles;
    }
  }, {
    key: 'render',
    value: function render() {
      var badgeStyles = Object.assign({}, styles, this.props.styles, this.colorizeBadge(this.props.type), this.positionBadge(this.props.position));
      return _react2.default.createElement(
        'span',
        { style: badgeStyles },
        this.props.type === 'verified' ? _react2.default.createElement(_icon2.default, { type: 'check', fill: 'white', height: 10, width: 10, style: { transform: 'rotate(45deg)', position: 'absolute', left: 3, top: 3 } }) : this.props.type === 'private' ? _react2.default.createElement(_icon2.default, { type: 'lock', fill: 'white', height: 14, width: 14, style: { marginTop: 2 } }) : this.props.children
      );
    }
  }]);

  return Badge;
}(_react.Component);

Badge.propTypes = {
  type: _react.PropTypes.oneOf(['substitute', 'duration', 'sponsored', 'admin-buttons', 'price', 'live', 'tag', 'partner', 'verified', 'staff', 'count', 'recording', 'private', 'featured']).isRequired,
  className: _react.PropTypes.string,
  children: _react.PropTypes.any,
  position: _react.PropTypes.string
};
Badge.defaultProps = {
  position: 'btm-end'
};
exports.default = Badge;