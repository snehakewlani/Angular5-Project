import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NavbarComponent} from './components/Navbar/NavbarComponent';
import {LoginComponent} from './components/Login/LoginComponent';
import {DashboardComponent} from './components/Dashboard/DashboardComponent'
import {RouterModule} from '@angular/router';
import {RouterComponent} from './components/Routing/RouterComponent';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent, LoginComponent, DashboardComponent, RouterComponent, NavbarComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, NgxPaginationModule, NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: RouterComponent},
      {path: 'dashboard', component: DashboardComponent}
    ])
  ],//
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
