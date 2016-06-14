'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stylesheet = require('../../../lib/stylesheet/stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  wrapper: {
    position: 'fixed',
    width: '600px',
    maxHeight: '600px',
    top: '10%',
    left: '50%',
    marginLeft: '-300px',
    background: 'white',
    zIndex: 9999,
    boxShadow: '0 0 0 20038px rgba(0,0,0,.5)',
    borderRadius: '5px'
  },

  overlayHeader: {
    padding: '15px 20px',
    fontSize: '20px',
    color: 'white',
    background: _stylesheet.defaults.colors.dmBrand
  },

  overlayContent: {
    padding: '20px',
    backgroundColor: 'white'
  },

  overlayFooter: {
    padding: '15px 20px',
    width: '100%',
    backgroundColor: _stylesheet.defaults.colors.gray4
  }
};

exports.default = styles;