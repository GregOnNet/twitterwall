import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, RequestOptions, URLSearchParams} from 'angular2/http';
import "rxjs/add/operator/map";
import {AppConfig} from '../config';

@Injectable()
export class Tweets {
  constructor(private _http: Http) { }

  getAll() {
    let params = new URLSearchParams();
    params.set('q', AppConfig.search);

    return this._http.get(AppConfig.apiPath + 'tweets', { search: params })
                     .map(res => res.json());
  }
}
