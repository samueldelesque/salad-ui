import React from 'react'
import request from 'request'
import express from 'express'
import webpack from 'webpack'
import ReactServer from 'react-dom/server'
import bodyParser from 'body-parser'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import DemoPage from './components/demo/demo'
import config from './conf/webpack.config.demo.js'
import routing from './conf/routing.json'
import Route from 'route-parser'

global.DM_ENV = {
  'form/input-text': {}
}

let routes = routing.map(function(r){
      r.route = Route(r.url)
      return r
    }),
    app = express(),
    compiler = webpack(config),
    useProd = false,
    PORT = 6040

app.use(bodyParser.json())

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

if(!useProd){
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {colors: true}
  }))

  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }))
}

app.all('/api-mock', function(req, res){
  if(!req.query || !req.query.url)
    return res.status(400).send("No URL provided")

  var q = {
    url: new Buffer(req.query.url, 'base64').toString('binary'),
    method: req.method,
    // can't pass headers //req.headers
    headers:  {
      // 'Accept': 'application/json',
      'content-type': 'application/json'
    },
    json: true
  }

  if(~['POST', 'PUT', 'PATCH'].indexOf(req.method.toUpperCase())){
    console.log('req.body', req.body)
    q.body  = req.body
  }

  console.log("Requested", q.method, q.url)

  request(q, function(err, r, body) {
    if(!err){
      res.header({'content-type': 'application/json'}).status(r.statusCode).send(body)
    }
    else{
      res.status(500).send({err: err, body: body})
    }
	})
})

app.use(express.static('./dist'));

app.get('*', function(req, res) {
  const route = routes.find(function(r){
    return r.route.match(req.url)
  })
  if(!route){
    return res.status(404).send('Page not found')
  }

  const initialState = {
    username: 'spi0n', //The owner channel
    useFixtures: true,
    query: route.route.match(req.url),
    sdx: 'fgYjWtVEUNYRNT6MqgK8qNdLnYUhFtjjEPqDrhe93RYqd4BwqaM1O-fRSytWygjl',
    links: {"link":{"type":"link","url":"http://www.canalplus.fr/"},"facebook":{"type":"facebook","url":"https://www.facebook.com/GuignolsInfo"},"twitter":{"type":"twitter","url":"https://twitter.com/LesGuignols"}}
  }
  const html = ReactServer.renderToString(<DemoPage {...initialState}/>)

  // Send the rendered page back to the client
  res.send(renderFullPage(html, initialState, route.bundle, route.bodyClass || ''))
})

function renderFullPage(html, initialState, bundle, bodyClass) {
  return `<!DOCTYPE html>
<html>
  <head>
    <title>SaladUI Components</title>
    <meta name="viewport" content="initial-scale=1">
      <style type="text/css">* {
  box-sizing: border-box; }

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline; }

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block; }

body {
  line-height: 1; }

ol, ul {
  list-style: none; }

blockquote, q {
  quotes: none; }

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none; }

table {
  border-collapse: collapse;
  border-spacing: 0; }

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.5; }

header {
  background-color: #0066DC;
  color: white;
  padding: 100px 0; }
  header p, header h1 {
    width: 600px;
    margin: 20px auto; }
  header h1 {
    font-size: 68px;
    font-weight: bold;
    text-shadow: 5px 5px #000;
    padding: 0 0 50px 0; }

h1 {
  font-size: 2.4rem; }

h2 {
  font-size: 2.2rem;
  font-weight: bold;
  color: #7F7F7F; }

h3 {
  font-size: 1.2rem; }

section {
  margin: 20px auto;
  width: 600px;
  padding: 20px 0;
  border-bottom: 5px solid #7F7F7F; }

footer {
  text-align: center;
  padding: 20px 0;
  font-weight: 100;
  letter-spacing: 1px; }
  footer a {
    color: #0066DC; }

pre {
  margin: 10px 0;
  padding: 10px;
  overflow: auto;
  background: #333;
  color: #aaa;
  font-family: monospace; }

.snippet {
  background: #333;
  padding: 3px;
  color: #aaa;
  font-family: monospace; }

.functionality li {
  margin: 20px 0; }

.icon-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; }
  .icon-list .icon-item {
    margin: 10px;
    padding: 10px;
    text-align: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #0066DC;
    display: inline-block;
    transition: all .4s;
    transform: scale(1);
    position: relative; }
    .icon-list .icon-item svg {
      vertical-align: middle; }
      .icon-list .icon-item svg path {
        transition: all .4s; }
    .icon-list .icon-item .icon-title {
      visibility: hidden;
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      color: white;
      vertical-align: middle;
      padding-top: 20px;
      font-weight: 100;
      top: 0;
      text-align: center;
      display: block;
      letter-spacing: 1px;
      opacity: 0;
      font-size: 8px;
      transition: all .4s; }
    .icon-list .icon-item:hover {
      transform: scale(1.4); }
      .icon-list .icon-item:hover .icon-title {
        visibility: visible;
        opacity: 1; }
      .icon-list .icon-item:hover svg path {
        fill: transparent; }
</style>
  </head>
  <body class="${bodyClass}">
    <div id="react-root">${html}</div>
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
    <script src="/${bundle}/${bundle}.js"></script>
  </body>
</html>`
}

app.listen(PORT, '0.0.0.0', function(err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://0.0.0.0:' + PORT)
})
