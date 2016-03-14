/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: [
      'bootstrap/dist/css/bootstrap.css',
      'font-awesome/css/font-awesome.css',
      'font-awesome/fonts/**'
    ]
  });
  return app.toTree();
};
