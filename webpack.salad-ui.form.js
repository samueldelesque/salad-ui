const { resolve } = require('path');
const base = require('./webpack.prod');

module.exports = Object.assign({}, base, {
  entry: [ './components/form/index' ],
  output: {
    filename: 'salad-ui.form.js',
    path: resolve(__dirname, 'dist', 'salad-ui.form'),
    libraryTarget: 'commonjs2'
  },
  externals: {
    'react': 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'moment': 'commonjs moment',
  }
});
