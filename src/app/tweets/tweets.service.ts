import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { AppConfig } from '../config';
import 'rxjs/add/operator/map';

@Injectable()
export class Tweets {
  constructor(private http: Http) { }

  getAll() {
    let since: string;
    let params = new URLSearchParams();
    let q = AppConfig.search;

    if (AppConfig.maxAge > 0) {
      let d = new Date();
      d.setTime(d.getTime() - (24 * 60 * 60 * 1000) * AppConfig.maxAge);

      since = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + d.getDate();
    }

    if (since) {
      q += ' since:' + since;
    };

    params.set('q', AppConfig.search);
    params.set('count', AppConfig.maxCount.toString());
    params.set('noretweeted', (AppConfig.noRetweeted) ? '1' : '0');

    return this.http.get(AppConfig.apiPath + 'tweets', { search: params })
                    .map(res => res.json());
  }
}