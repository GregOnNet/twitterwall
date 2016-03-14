'use strict';

var restify = require('restify');
var request = require('request');

exports.getAll = function(req, res, next){
  var options = {
    url: 'https://api.twitter.com/1.1/search/tweets.json?&result_type=recent&q=%23spartakiade',
    headers: {
      'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAKyJuAAAAAAAP%2Fl8i%2BIBG4ypJYwbKChIt8fOSOk%3DVuK2E9VgikCCUpmoYV0Zq0ZCE3CeUs3aWryi9TuOnk6Yh9Ykhk'
    }
  };

  request(options, function(err, response, body) {
    var tweets = JSON.parse(body).statuses;
    res.json(tweets);
  });
}
