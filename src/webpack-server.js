var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../conf/webpack.config.demo.dev.js')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: 'errors-only'
}).listen(6041, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:6041/');
});
