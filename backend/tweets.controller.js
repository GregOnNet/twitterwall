'use strict';

const restify = require('restify');
const Twit = require('twit');
const config = require('./config');

const exiles = tryRequire('./twitter-blacklist', []);

const twit = new Twit(config.credentials);

exports.getAll = function(req, res, next) {
  //pass params or set default values
  const params = {
    q: req.query.q || '#nossued',
    count: req.query.count || 100,
    result_type: req.query.result_type || 'recent'
  };

  twit.get('search/tweets', params, function(err, data, response) {
    var tweets = data.statuses;

    //remove retweeted status if *noretweeted* param is set
    if (req.query.noretweeted === '1') {
      tweets = tweets.filter(tweet => hasTweetBeenRetweeted(tweet));
    }

    tweets = tweets.map(tweet);

    if (exiles) {
      tweets = tweets.filter(removeExiles);
    }

    res.json(tweets);
  });
};

function hasTweetBeenRetweeted(tweet) {
  return !tweet.hasOwnProperty('retweeted_status');
}

function removeExiles(tweet) {
  var isGranted = true;
  exiles.forEach(function(exile) {
    if (tweet.creator.toLowerCase() === exile) isGranted = false;
  });
  return isGranted;
}

function tweet(t) {
  var has_image = false;
  var image_url_https;

  if (
    t.entities !== undefined &&
    t.entities.media !== undefined &&
    t.entities.media.length > 0 &&
    t.entities.media[0].media_url_https !== undefined &&
    t.entities.media[0].media_url_https.indexOf('.jpg') > 0
  ) {
    has_image = true;
    image_url_https = t.entities.media[0].media_url_https;
  }

  return {
    creator: t.user.screen_name,
    profile_image_url_https: t.user.profile_image_url_https,
    text: t.text,
    created_at: t.created_at,
    retweet_count: t.retweet_count,
    favorite_count: t.favorite_count,
    has_image: has_image,
    image_url_https: image_url_https
  };
}

function tryRequire(path, fallbackValue) {
  try {
    return require(path);
  } catch (error) {
    return fallbackValue;
  }

}