'use strict';

var twCtrl = require('./tweets.controller');
var restify = require('restify');
var RestifyRouter = require('restify-routing')
var server = restify.createServer();

server.use(restify.queryParser());
server.use(restify.CORS({}));


var rootRouter = new RestifyRouter();
var api = new RestifyRouter();


/****************
*** ROUTES
****************/

api.get('/tweets', twCtrl.getAll);

rootRouter.use('/api/v1', api);
rootRouter.applyRoutes(server);

server.listen(3000, function() {
  console.log('Server running at %s', server.url);
});
