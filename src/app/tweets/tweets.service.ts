import {Injectable}     from 'angular2/core';
import {AppCredentials} from '../app.credentials';
import {Observable}     from 'rxjs/Observable';
import {Http, Headers, RequestOptions} from 'angular2/http';
import "rxjs/add/operator/map";

@Injectable()
export class Tweets {
  private _accessToken: string;
  private _oAuthUrl = 'https://api.twitter.com/oauth2/token';

  constructor(private _http: Http) {
  }

  getAll() {
    return this._http.get('http://localhost:3000/api/v1/tweets')
      .map(res => JSON.parse(res.text()))
  }
}
