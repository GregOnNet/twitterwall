import {Directive, Input} from 'angular2/core';
import {ViewContainerRef} from 'angular2/core';

@Directive({ selector: '[spScrollHorizontal]' })
export class TweetWallScrollHorizontal {
  constructor(
    private _viewContainer: ViewContainerRef
  ) { }

  @Input() set spScrollHorizontal(condition: boolean) {
    let tweetWall = this._viewContainer.element.nativeElement;
    // screen-availHeight - nav.height - padding-top - padding-bottom - footer-height
    let takenSpace = 60 + 8 + 8 + 24;
    tweetWall.style.height = `${screen.availHeight - takenSpace}px`;
  }
}
