import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'tweeted_ago'})
export class TweetedAgo implements PipeTransform {
  transform(date: any) : any {
    date = new Date(date).getTime()/1000;

    var seconds = Math.floor(((new Date().getTime()/1000) - date)),

    interval = Math.floor(seconds / 31536000);
    if (interval > 1) return `vor ${interval} Jahren`;

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return `vor ${interval} Monaten`;

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return `vor ${interval} Tagen`;

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return `vor ${interval} Stunden`;

    interval = Math.floor(seconds / 60);
    if (interval > 1) return `vor ${interval} Minuten`;

    return `vor ${Math.floor(seconds)} Sekunden`;
  }
}
