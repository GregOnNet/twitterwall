import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, RequestOptions, URLSearchParams} from 'angular2/http';
import "rxjs/add/operator/map";
import {AppConfig} from '../config';

@Injectable()
export class Tweets {
  constructor(private _http: Http) { }

  getAll() {
    if(AppConfig.maxAge > 0){
      let d = new Date();
      d.setTime(d.getTime() - (24*60*60*1000) * AppConfig.maxAge);

      var since = d.getFullYear() + '-' + ('0'+(d.getMonth()+1)).slice(-2) + '-' + d.getDate();
    }

    var q = AppConfig.search;
    if(since) q += ' since:' + since;

    var params = new URLSearchParams();
    params.set('q', encodeURIComponent(q));
    params.set('count', AppConfig.maxCount.toString());
    params.set('noretweeted', (AppConfig.noRetweeted)?'1':'0');

    return this._http.get(AppConfig.apiPath + 'tweets', { search: params })
                     .map(res => res.json());
  }
}
