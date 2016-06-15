"use strict";

module.exports = function (html, initialState, bundle, bodyClass) {
  return "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Salad-UI Components</title>\n    <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"/demo/demo.css\"/>\n    <link rel=\"stylesheet\" href=\"/demo/transitions.css\"/>\n  </head>\n  <body class=\"" + bodyClass + "\">\n    <div id=\"react-root\">" + html + "</div>\n    <script>__INITIAL_STATE__ = " + JSON.stringify(initialState) + "</script>\n    <script src=\"/" + bundle + "/" + bundle + ".js\"></script>\n  </body>\n</html>";
};