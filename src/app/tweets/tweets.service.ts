import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, RequestOptions} from 'angular2/http';
import "rxjs/add/operator/map";

@Injectable()
export class Tweets {
  constructor(private _http: Http) { }

  getAll() {
    return this._http.get('http://localhost:3000/api/v1/tweets')
                     .map(res => {
                       console.log(JSON.parse(res.text()));
                       let tweets = JSON.parse(res.text()).map(tweet => {
                         let has_image = false;
                         let image_url_https;

                         if (tweet.entities != undefined &&
                             tweet.entities.media != undefined &&
                             tweet.entities.media.length > 0 &&
                             tweet.entities.media[0].media_url_https != undefined &&
                             tweet.entities.media[0].media_url_https.indexOf('.jpg') > 0) {
                           has_image = true;
                           image_url_https = tweet.entities.media[0].media_url_https;
                         }

                         return {
                          creator: tweet.user.screen_name,
                          text: tweet.text,
                          created_at: tweet.created_at,
                          retweet_count: tweet.retweet_count,
                          favorite_count: tweet.favorite_count,
                          has_image: has_image,
                          image_url_https: image_url_https
                         };
                       });
                       console.log(tweets);
                       return tweets;
                     })
  }
}
