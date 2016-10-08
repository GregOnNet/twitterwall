import { Component, Input } from '@angular/core';

@Component({
  selector: 'sp-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  @Input() twitterHandle: string;
  @Input() hashtag: string;
}
