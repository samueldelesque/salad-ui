const { resolve } = require('path');
const base = require('./webpack.prod');

module.exports = Object.assign({}, base, {
  entry: [ './lib/index' ],
  output: {
    filename: 'salad-ui.lib.js',
    path: resolve(__dirname, 'dist', 'salad-ui.lib'),
    libraryTarget: 'commonjs2'
  },
  externals: {
    'react': 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'moment': 'commonjs moment',
  }
});
