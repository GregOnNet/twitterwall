import {Directive, Input} from 'angular2/core';
import {ViewContainerRef} from 'angular2/core';

@Directive({ selector: '[spScrollHorizontal]' })
export class TweetWallScrollHorizontal {
  constructor(
    private _viewContainer: ViewContainerRef
  ) { }

  @Input() set spScrollHorizontal(condition: boolean) {
    let tweetWall = this._viewContainer.element.nativeElement;
    // screen-height - nav.height - padding-top - padding-bottom
    tweetWall.style.height = `${screen.height - 76}px`;
    tweetWall.style.width = `${screen.width}px`;
  }
}
