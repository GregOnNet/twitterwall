import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { TweetsWall } from './tweets-wall.component';
import { TweetedAgo } from './tweeted-ago.pipe';
import { TweetBeautifier } from './tweet-beautifier.pipe';
import { TweetWallScrollHorizontal } from './tweet-scroll.directive';
import { Tweets } from './tweets.service';

@NgModule({
  imports: [CommonModule, HttpModule],
  exports: [TweetsWall],
  declarations: [TweetsWall, TweetWallScrollHorizontal, TweetedAgo, TweetBeautifier],
  providers: [Tweets]
})
export class TweetsModule { }