import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Tweets} from './tweets.service';
import {TweetBeautifier} from './tweet-beautifier.pipe';
import {TweetedAgo} from './tweeted-ago.pipe';

@Component({
  selector: 'sp-tweets-wall',
  templateUrl: '/app/tweets/tweets-wall.component.html',
  providers: [HTTP_PROVIDERS, Tweets],
  directives: [CORE_DIRECTIVES],
  pipes: [TweetBeautifier, TweetedAgo]
})
export class TweetsWall implements OnInit {
  tweets: Array<any>;

  constructor(private _tweets: Tweets) { }

  ngOnInit() {
    this._tweets.getAll()
                .subscribe(tweets => this.tweets = tweets);

  }
}
