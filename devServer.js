import React from 'react'
import request from 'request'
import express from 'express'
import webpack from 'webpack'
import ReactServer from 'react-dom/server'
import bodyParser from 'body-parser'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import DemoPage from './components/demo'
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
    <style type="text/css">*{box-sizing:border-box}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{background-color:#0066dc;color:#fff;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5}.demo{margin:20px auto;width:600px;padding:20px}h1{font-size:2rem}h2{font-size:1.6rem}h3{font-size:1.2rem}section{padding:20px 0;border-bottom:5px solid #fff}footer{text-align:center;padding:20px 0;font-weight:100;letter-spacing:1px}footer a{color:#fff}pre{margin:10px 0;padding:10px;overflow:auto}.snippet,pre{background:#333;color:#aaa;font-family:monospace}.snippet{padding:3px}.functionality li{margin:20px 0}.icon-list{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.icon-list .icon-item{margin:10px;border:4px solid hsla(0,0%,100%,.1);padding:10px;text-align:center;width:50px;height:50px;display:inline-block;transition:all .4s;transform:scale(1);position:relative}.icon-list .icon-item svg{vertical-align:middle}.icon-list .icon-item .icon-title{visibility:hidden;position:absolute;left:0;width:100%;height:100%;background-color:#408ae5;color:#fff;vertical-align:middle;padding-top:15px;font-weight:100;top:0;text-align:center;display:block;letter-spacing:1px;opacity:0;font-size:8px;transition:all .4s}.icon-list .icon-item:hover{border:4px solid #408ae5;transform:scale(1.4)}.icon-list .icon-item:hover .icon-title{visibility:visible;opacity:1}input{box-sizing:border-box;width:100%;font-family:hindlight,Helvetica,Arial,Sans-serif;line-height:32px;height:32px;border:1px solid #e5e5e5;border-radius:3px;background-color:#fff;padding:0 0 0 10px;font-size:14px}</style>
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
