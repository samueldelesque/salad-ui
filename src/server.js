import React from 'react'
import request from 'request'
import express from 'express'
import ReactServer from 'react-dom/server'
import bodyParser from 'body-parser'
import routing from '../conf/routing.json'
import Route from 'route-parser'
import fetch from 'node-fetch'

// fetch polyfill must be available natively...
global.fetch = fetch

const renderFullPage = function(html, initialState, bundle, bodyClass){
  return `<!DOCTYPE html>
<html>
  <head>
    <title>Salad-UI Components</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
    <link rel="stylesheet" href="/demo/demo.css"/>
    <link rel="stylesheet" href="/demo/transitions.css"/>
  </head>
  <body class="${bodyClass}">
    <div id="react-root">${html}</div>
    <script>__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
    <script src="/${bundle}/${bundle}.js"></script>
  </body>
</html>`
}


let routes = routing.map(function(r){
      r.route = Route(r.url)
      return r
    }),
    app = express(),
    useProd = false,
    PORT = 6040,
    argv = require('optimist').argv

app.use(bodyParser.json())

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

console.log('Initializing Salad-UI server is-client='+argv['is-client']+', local='+argv['local'])

if(argv['local']){
  var webpack = require('webpack')
  var webpackDevMiddleware = require('webpack-dev-middleware')
  var webpackHotMiddleware = require('webpack-hot-middleware')
  var config = require('../conf/webpack.config.demo.dev.js')

  var compiler = webpack(config)

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
  }

  let html = ''
  if(!argv['is-client']){
    const DemoPage = require('./components/demo/demo').default
    html = ReactServer.renderToString(<DemoPage {...initialState}/>)
  }

  // Send the rendered page back to the client
  res.send(renderFullPage(html, initialState, route.bundle, route.bodyClass || ''))
})

app.listen(PORT, '0.0.0.0', function(err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://0.0.0.0:' + PORT)
})
