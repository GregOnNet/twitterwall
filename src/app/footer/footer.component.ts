import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../config';

@Component({
  selector: 'sp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  legalPage = AppConfig.legalPage
}
