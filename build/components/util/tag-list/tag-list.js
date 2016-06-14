'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../../icon/icon');

var _icon2 = _interopRequireDefault(_icon);

var _stylesheet = require('./_stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collection = function (_Component) {
  _inherits(Collection, _Component);

  function Collection() {
    _classCallCheck(this, Collection);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Collection).apply(this, arguments));
  }

  _createClass(Collection, [{
    key: 'removeItem',
    value: function removeItem(i) {
      if (this.props.handleRemoveItem) {
        this.props.handleRemoveItem(i);
      }
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this2 = this;

      var lis = this.props.items.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          { style: _stylesheet2.default.pill, key: 'tags.' + index },
          _react2.default.createElement(
            'span',
            { style: { paddingRight: '10px' } },
            item
          ),
          _react2.default.createElement(_icon2.default, { width: 10, height: 10, type: 'close', onClick: function onClick() {
              return _this2.removeItem(item);
            } })
        );
      });

      return _react2.default.createElement(
        'ul',
        null,
        lis
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: _stylesheet2.default.tagBox },
        this.renderItems(this.props.items)
      );
    }
  }]);

  return Collection;
}(_react.Component);

Collection.defaultProps = {
  classname: '',
  itemClassname: 'pill',
  items: []
};
exports.default = Collection;