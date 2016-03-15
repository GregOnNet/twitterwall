import {Directive, Input} from 'angular2/core';
import {ElementRef, ViewContainerRef} from 'angular2/core';

@Directive({ selector: '[spScrollHorizontal]' })
export class TweetWallScrollHorizontal {
  private _moveIntervall: number = 4 * 1000;
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

    this.startScrollIntervall(this._moveIntervall);
  }

  private startScrollIntervall(intervall) {
    setInterval(this.scrollWall.bind(this), intervall);
  }

  private scrollWall() {
    let scrollX = window.scrollX;
    window.scroll(window.scrollX + screen.width, 0);

    if(window.scrollX == scrollX)
      window.scroll(0,0);
  }
}
