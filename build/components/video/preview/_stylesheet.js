'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stylesheet = require('../../../lib/stylesheet/stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  list: {
    preview: {
      marginBottom: 20,
      display: 'flex',
      position: 'relative'
    },
    image: {
      width: 162,
      height: 93
    },
    text: {
      flex: 1,
      display: 'inline-block', //non flex fallback
      paddingLeft: 20,
      lineHeight: 1.2,
      height: '2.4rem'
    },
    title: {
      marginBottom: 10,
      lineHeight: 1.2,
      height: '2.4rem',
      overflow: 'hidden',
      maxWidth: '210px'
    }
  },
  grid: {
    preview: {},
    image: {
      width: '100%',
      height: 100
    },
    text: {},
    title: {
      marginTop: 10,
      marginBottom: 10,
      lineHeight: 1.2,
      height: '2.4rem',
      overflow: 'hidden',
      maxWidth: '210px'
    }
  },
  after: {
    clear: 'both',
    display: 'table'
  },
  link: {
    color: _stylesheet.defaults.colors.dmBrand
  }
};

exports.default = styles;