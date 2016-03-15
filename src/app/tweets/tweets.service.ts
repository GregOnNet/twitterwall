import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, RequestOptions, URLSearchParams} from 'angular2/http';
import "rxjs/add/operator/map";

@Injectable()
export class Tweets {
  constructor(private _http: Http) { }

  getAll() {
    let params = new URLSearchParams();
    params.set('q', '#spartakiade');

    return this._http.get('http://localhost:3000/api/v1/tweets', { search: params })
                     .map(res => res.json());
  }
}
