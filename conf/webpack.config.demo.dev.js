var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    directories = [path.resolve('./build')]

module.exports = {
  devtool: 'source-map',
  entry:  {
    demo: [
      'webpack-dev-server/client?http://localhost:6041',
      'webpack/hot/only-dev-server',
      path.resolve('./build/components/demo/entry')
    ],
  },
  resolve: {
    root: directories,
    extensions: ['', '.js', '.es6 ', '.jsx'],
  },
  output: {
    path: path.resolve('dist/demo'),
    filename: 'demo.js',
    publicPath: '/demo/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new ExtractTextPlugin("styles.css")
  ],
  module: {
    loaders: [
        {
          test: /\.jsx|\.js/,
          loaders: ['react-hot'],//, 'babel?presets[]=stage-0'
          include: directories,
        },
        { test: /\.json/, loaders: ['json-loader']},
        // { test: /\.scss|\.cs s$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')},
    ]
  }
};
