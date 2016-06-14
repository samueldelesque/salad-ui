'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _demo = require('./components/demo/demo');

var _demo2 = _interopRequireDefault(_demo);

var _webpackConfigDemo = require('../conf/webpack.config.demo.js');

var _webpackConfigDemo2 = _interopRequireDefault(_webpackConfigDemo);

var _routing = require('../conf/routing.json');

var _routing2 = _interopRequireDefault(_routing);

var _routeParser = require('route-parser');

var _routeParser2 = _interopRequireDefault(_routeParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.DM_ENV = {
  'form/input-text': {}
};

var routes = _routing2.default.map(function (r) {
  r.route = (0, _routeParser2.default)(r.url);
  return r;
}),
    app = (0, _express2.default)(),
    compiler = (0, _webpack2.default)(_webpackConfigDemo2.default),
    useProd = false,
    PORT = 6040;

app.use(_bodyParser2.default.json());

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

if (!useProd) {
  app.use((0, _webpackDevMiddleware2.default)(compiler, {
    noInfo: true,
    publicPath: _webpackConfigDemo2.default.output.publicPath,
    stats: { colors: true }
  }));

  app.use((0, _webpackHotMiddleware2.default)(compiler, {
    log: console.log
  }));
}

app.all('/api-mock', function (req, res) {
  if (!req.query || !req.query.url) return res.status(400).send("No URL provided");

  var q = {
    url: new Buffer(req.query.url, 'base64').toString('binary'),
    method: req.method,
    // can't pass headers //req.headers
    headers: {
      // 'Accept': 'application/json',
      'content-type': 'application/json'
    },
    json: true
  };

  if (~['POST', 'PUT', 'PATCH'].indexOf(req.method.toUpperCase())) {
    console.log('req.body', req.body);
    q.body = req.body;
  }

  console.log("Requested", q.method, q.url);

  (0, _request2.default)(q, function (err, r, body) {
    if (!err) {
      res.header({ 'content-type': 'application/json' }).status(r.statusCode).send(body);
    } else {
      res.status(500).send({ err: err, body: body });
    }
  });
});

app.use(_express2.default.static('./dist'));

app.get('*', function (req, res) {
  var route = routes.find(function (r) {
    return r.route.match(req.url);
  });
  if (!route) {
    return res.status(404).send('Page not found');
  }

  var initialState = {
    username: 'spi0n', //The owner channel
    useFixtures: true,
    query: route.route.match(req.url),
    sdx: 'fgYjWtVEUNYRNT6MqgK8qNdLnYUhFtjjEPqDrhe93RYqd4BwqaM1O-fRSytWygjl',
    links: { "link": { "type": "link", "url": "http://www.canalplus.fr/" }, "facebook": { "type": "facebook", "url": "https://www.facebook.com/GuignolsInfo" }, "twitter": { "type": "twitter", "url": "https://twitter.com/LesGuignols" } }
  };
  var html = _server2.default.renderToString(_react2.default.createElement(_demo2.default, initialState));

  // Send the rendered page back to the client
  res.send(renderFullPage(html, initialState, route.bundle, route.bodyClass || ''));
});

function renderFullPage(html, initialState, bundle, bodyClass) {
  return '<!DOCTYPE html>\n<html>\n  <head>\n    <title>SaladUI Components</title>\n    <meta name="viewport" content="initial-scale=1">\n      <style type="text/css">* {\n  box-sizing: border-box; }\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \'\';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nbody {\n  font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n  line-height: 1.5; }\n\nheader {\n  background-color: #0066DC;\n  color: white;\n  padding: 100px 0; }\n  header p, header h1 {\n    width: 600px;\n    margin: 20px auto; }\n  header h1 {\n    font-size: 68px;\n    font-weight: bold;\n    text-shadow: 5px 5px #000;\n    padding: 0 0 50px 0; }\n\nh1 {\n  font-size: 2.4rem; }\n\nh2 {\n  font-size: 2.2rem;\n  font-weight: bold;\n  color: #7F7F7F; }\n\nh3 {\n  font-size: 1.2rem; }\n\nsection {\n  margin: 20px auto;\n  width: 600px;\n  padding: 20px 0;\n  border-bottom: 5px solid #7F7F7F; }\n\nfooter {\n  text-align: center;\n  padding: 20px 0;\n  font-weight: 100;\n  letter-spacing: 1px; }\n  footer a {\n    color: #0066DC; }\n\npre {\n  margin: 10px 0;\n  padding: 10px;\n  overflow: auto;\n  background: #333;\n  color: #aaa;\n  font-family: monospace; }\n\n.snippet {\n  background: #333;\n  padding: 3px;\n  color: #aaa;\n  font-family: monospace; }\n\n.functionality li {\n  margin: 20px 0; }\n\n.icon-list {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap; }\n  .icon-list .icon-item {\n    margin: 10px;\n    padding: 10px;\n    text-align: center;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background-color: #0066DC;\n    display: inline-block;\n    transition: all .4s;\n    transform: scale(1);\n    position: relative; }\n    .icon-list .icon-item svg {\n      vertical-align: middle; }\n      .icon-list .icon-item svg path {\n        transition: all .4s; }\n    .icon-list .icon-item .icon-title {\n      visibility: hidden;\n      position: absolute;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      color: white;\n      vertical-align: middle;\n      padding-top: 20px;\n      font-weight: 100;\n      top: 0;\n      text-align: center;\n      display: block;\n      letter-spacing: 1px;\n      opacity: 0;\n      font-size: 8px;\n      transition: all .4s; }\n    .icon-list .icon-item:hover {\n      transform: scale(1.4); }\n      .icon-list .icon-item:hover .icon-title {\n        visibility: visible;\n        opacity: 1; }\n      .icon-list .icon-item:hover svg path {\n        fill: transparent; }\n</style>\n  </head>\n  <body class="' + bodyClass + '">\n    <div id="react-root">' + html + '</div>\n    <script>window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '</script>\n    <script src="/' + bundle + '/' + bundle + '.js"></script>\n  </body>\n</html>';
}

app.listen(PORT, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://0.0.0.0:' + PORT);
});