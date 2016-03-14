import {Component} from 'angular2/core';
import {HTTP_PROVIDERS, HTTP_BINDINGS} from 'angular2/http';
import {TweetsWall} from './tweets/tweets-wall.component';

@Component({
  selector: 'twitterwall-app',
  directives: [TweetsWall],
  templateUrl: 'app/twitterwall.html',
})
export class TwitterwallApp { }
