module.exports = function(html, initialState, bundle, bodyClass){
  return `<!DOCTYPE html>
<html>
  <head>
    <title>Salad-UI Components</title>  
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
    <link rel="stylesheet" href="/demo/demo.css"/>
  </head>
  <body class="${bodyClass}">
    <div id="react-root">${html}</div>
    <script>__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
    <script src="/${bundle}/${bundle}.js"></script>
  </body>
</html>`
}
