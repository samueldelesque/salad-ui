var path = require('path'),
    webpack = require('webpack'),
    directories = [path.resolve('./components'), path.resolve('./lib')]

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: path.resolve('./build/components/demo/entry.js'),
  resolve: {
    root: path.resolve('../'),
    extensions: ['', '.js', '.es6 ', '.jsx'],
  },
  output: {
    path: path.resolve('dist/demo'),
    filename: 'demo.js',
    publicPath: '/demo/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
        {
          test: /\.jsx?|\.es6/,
          loaders: ['babel?presets[]=stage-0'],
          include: directories,
          exclude: [path.resolve('../node_modules')]
        },
        {
            test: /\.scss|\.css$/,
            loader: "style!css!sass"
        }
    ]
  }
};
