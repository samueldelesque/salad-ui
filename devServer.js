var request = require('request'),
    express = require('express'),
    webpack = require('webpack'),
    bodyParser = require('body-parser'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    config = require('./conf/webpack.config.dev'),
    routing = require('./conf/routing.json'),
    Route = require('route-parser'),
    routes = routing.map(function(r){
      r.route = Route(r.url)
      return r
    }),
    app = express(),
    compiler = webpack(config),
    useProd = false,
    PORT = 6040,

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

app.use(express.static('./public'));

app.get('*', function(req, res) {
  const route = routes.find(function(r){
    return r.route.match(req.url)
  })
  if(!route){
    console.log(routes)
    return res.status(404).send('Page not found')
  }

  const initialState = {
    username: 'spi0n', //The owner channel
    useFixtures: true,
    query: route.route.match(req.url),
    sdx: 'fgYjWtVEUNYRNT6MqgK8qNdLnYUhFtjjEPqDrhe93RYqd4BwqaM1O-fRSytWygjl',
    links: {"link":{"type":"link","url":"http://www.canalplus.fr/"},"facebook":{"type":"facebook","url":"https://www.facebook.com/GuignolsInfo"},"twitter":{"type":"twitter","url":"https://twitter.com/LesGuignols"}}
  }
  const html = '' //Not universal yet
  const bundle

  // Send the rendered page back to the client
  res.send(renderFullPage(html, initialState, route.bundle, route.bodyClass || ''))
})

function renderFullPage(html, initialState, bundle, bodyClass) {
  return `<!DOCTYPE html>
<html>
  <head>
    <title>Dailymotion Partner Page</title>
    <link rel="stylesheet" type="text/css" href="/css/index.css">
    <link rel="stylesheet" type="text/css" href="/css/commoncss.css">
    <script>window.selfRender = true</script>
    <meta name="viewport" content="initial-scale=1">
  </head>
  <body class="responsive-grid ${bodyClass}">
    <div class="main-menu">
      <span>Standalone Apps:</span>
      <a href="/settings">Settings</a>
      <a href="/${initialState.username}">My Channel</a>
    </div>
    <div id="react-root">${html}</div>
    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
    </script>
    <script src="/dist/${bundle}.bundle.js"></script>
  </body>
</html>`
}

app.listen(PORT, '0.0.0.0', function(err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://0.0.0.0:3000')
})
