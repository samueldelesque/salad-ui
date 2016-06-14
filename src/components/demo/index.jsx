module.exports = function(html, initialState, bundle, bodyClass){
  return `<!DOCTYPE html>
<html>
  <head>
    <title>SaladUI Components</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="/demo/demo.css"/>
  </head>
  <body class="${bodyClass}">
    <div id="react-root">${html}</div>
    <script>__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
    <script src="/${bundle}/${bundle}.js"></script>
  </body>
</html>`
}
