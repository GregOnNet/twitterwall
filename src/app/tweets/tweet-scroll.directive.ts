import {Directive, Input, Output} from '@angular/core';
import {EventEmitter, ViewContainerRef} from '@angular/core';
import {AppConfig} from '../config';

@Directive({ selector: '[spScrollHorizontal]' })
export class TweetWallScrollHorizontal {
  @Output() reachedEnd: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private _viewContainer: ViewContainerRef
  ) { }

  @Input() set spScrollHorizontal(condition: boolean) {
    let tweetWall = this._viewContainer.element.nativeElement;
    let tweetWallPaddingTop = 8;
    let tweetWallPaddingBottom = 8;

    let windowHeight = window.innerHeight;
    let navbarHeight = document.getElementsByClassName('sp-navbar')[0]['offsetHeight'];
    let footerHeight = document.getElementsByTagName('footer')[0]['offsetHeight'];

    tweetWall.style.height = `${windowHeight - navbarHeight - footerHeight - tweetWallPaddingTop - tweetWallPaddingBottom - 1}px`;

    this.startScrollIntervall(AppConfig.scrollIntervall);
  }

  private startScrollIntervall(intervall) {
    setInterval(this.scrollWall.bind(this), intervall);
  }

  private scrollWall() {
    let scrollX = window.scrollX;
    window.scroll(window.scrollX + screen.width, 0);

    if (window.scrollX === scrollX) {
      this.reachedEnd.emit(true);
      window.scroll(0, 0);
    }
  }
}
