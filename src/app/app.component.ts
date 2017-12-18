import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<NavbarSelector></NavbarSelector><router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
