const { resolve } = require('path');
const base = require('./webpack.prod');

module.exports = Object.assign({}, base, {
  entry: [ './components/util/index' ],
  output: {
    filename: 'salad-ui.util.js',
    path: resolve(__dirname, 'dist', 'salad-ui.util'),
    libraryTarget: 'commonjs2'
  },
  externals: {
    'react': 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'moment': 'commonjs moment',
  }
});
