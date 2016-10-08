import { Component } from '@angular/core';
import { AppConfig } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  handle = AppConfig.handle;
  hashtag = AppConfig.search;
}
