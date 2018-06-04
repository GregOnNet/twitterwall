'use strict';

const twCtrl = require('./tweets.controller');
const restify = require('restify');
const RestifyRouter = require('restify-routing')
const server = restify.createServer();

server.use(restify.queryParser());
server.use(restify.CORS({}));


const rootRouter = new RestifyRouter();
const api = new RestifyRouter();


/****************
*** ROUTES
****************/

api.get('/tweets', twCtrl.getAll);

rootRouter.use('/api/v1', api);
rootRouter.applyRoutes(server);

server.listen(3000, function() {
  console.log('Server running at %s', server.url);
});
