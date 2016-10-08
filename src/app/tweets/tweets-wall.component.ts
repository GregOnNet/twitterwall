import { Component, OnInit } from '@angular/core';
import { Tweets } from './tweets.service';

@Component({
  selector: 'sp-tweets-wall',
  templateUrl: './tweets-wall.component.html'
})
export class TweetsWall implements OnInit {
  tweets: Array<any>;

  constructor(private _tweets: Tweets) { }

  ngOnInit() {
    this.refreshTweets();
  }

  refreshTweets() {
    this._tweets.getAll().subscribe(tweets => this.tweets = tweets);
  }
}
