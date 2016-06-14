"use strict";

module.exports = function (html, initialState, bundle, bodyClass) {
  return "<!DOCTYPE html>\n<html>\n  <head>\n    <title>SaladUI Components</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/>\n    <link rel=\"stylesheet\" href=\"/demo/demo.css\"/>\n  </head>\n  <body class=\"" + bodyClass + "\">\n    <div id=\"react-root\">" + html + "</div>\n    <script>__INITIAL_STATE__ = " + JSON.stringify(initialState) + "</script>\n    <script src=\"/" + bundle + "/" + bundle + ".js\"></script>\n  </body>\n</html>";
};