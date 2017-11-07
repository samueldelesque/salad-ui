const { resolve } = require('path');
const base = require('./webpack.prod');

module.exports = Object.assign({}, base, {
  entry: [ './components/chart/index' ],
  output: {
    filename: 'salad-ui.chart.js',
    path: resolve(__dirname, 'dist', 'salad-ui.chart'),
    libraryTarget: 'commonjs2'
  },
  externals: {
    'react': 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'moment': 'commonjs moment',
  }
});
