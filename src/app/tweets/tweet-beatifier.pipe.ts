import {Pipe, PipeTransform} from 'angular2/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'beautifyTweet'})
export class TweetBeautifier implements PipeTransform {
  transform(value:string) : any {
    return value.replace(/(^|\s)([#|@][a-z\d-]+)/ig, '$1<span class="sp-tweet-hash-tag">$2</span>');
  }
}
