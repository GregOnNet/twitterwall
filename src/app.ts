import {bootstrap} from 'angular2/platform/browser';
import {TwitterwallApp} from './app/twitterwall';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(TwitterwallApp, [
  ROUTER_PROVIDERS
]);
