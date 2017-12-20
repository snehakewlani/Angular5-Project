import { Component } from '@angular/core';
import * as _ from 'underscore';
 
//import { pagerService } from './services/pagerService';

@Component({
  selector: 'app-root',
  template: '<NavbarSelector></NavbarSelector><router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
