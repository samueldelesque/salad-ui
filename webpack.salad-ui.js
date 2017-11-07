const { resolve } = require('path');
const base = require('./webpack.prod');

module.exports = Object.assign({}, base, {
  entry: [ './components/salad-ui' ],
  output: {
    filename: 'salad-ui.js',
    path: resolve(__dirname, 'dist', 'salad-ui'),
    libraryTarget: 'commonjs2'
  },
  externals: {
    'react': 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'moment': 'commonjs moment',
  }
});
