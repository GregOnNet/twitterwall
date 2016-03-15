import {Directive, Input} from 'angular2/core';
import {ViewContainerRef} from 'angular2/core';

@Directive({ selector: '[spScrollHorizontal]' })
export class TweetWallScrollHorizontal {
  constructor(
    private _viewContainer: ViewContainerRef
  ) { }

  @Input() set spScrollHorizontal(condition: boolean) {

    var tweetWall = this._viewContainer.element.nativeElement;
    var tweetWallPaddingTop = 8;
    var tweetWallPaddingBottom = 8;

    var windowHeight = window.innerHeight;
    var navbarHeight = document.getElementsByClassName("sp-navbar")[0]['offsetHeight'];
    var footerHeight = document.getElementsByTagName("footer")[0]['offsetHeight'];

    tweetWall.style.height = `${windowHeight - navbarHeight - footerHeight - tweetWallPaddingTop - tweetWallPaddingBottom - 1}px`;
  }
}
