import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'beautifyTweet'})
export class TweetBeautifier implements PipeTransform {
  transform(value:string) : any {
    return value.replace(/(^|\s)([#|@][a-z\d-]+)/ig, '$1<span class="sp-tweet-hash-tag">$2</span>');
  }
}
