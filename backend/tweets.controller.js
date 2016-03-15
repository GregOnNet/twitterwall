'use strict';

var restify = require('restify');
var request = require('request');

exports.getAll = function(req, res, next){
  var options = {
    url: 'https://api.twitter.com/1.1/search/tweets.json?&result_type=recent&q=%23spartakiade',
    headers: {
      'Authorization': ''
    }
  };

  request(options, function(err, response, body) {
    var tweets = JSON.parse(body).statuses.map(tweet);
    res.json(tweets);
  });
}

function tweet(t) {
  var has_image = false;
  var image_url_https;

  if (t.entities !== undefined &&
      t.entities.media !== undefined &&
      t.entities.media.length > 0 &&
      t.entities.media[0].media_url_https !== undefined &&
      t.entities.media[0].media_url_https.indexOf('.jpg') > 0) {
    has_image = true;
    image_url_https = t.entities.media[0].media_url_https;
  }

  return {
   creator: t.user.screen_name,
   text: t.text,
   created_at: t.created_at,
   retweet_count: t.retweet_count,
   favorite_count: t.favorite_count,
   has_image: has_image,
   image_url_https: image_url_https
  };
}
