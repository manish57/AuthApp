import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';
import {AUTH_PROVIDERS} from 'angular2-jwt';

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';

import {Auth} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [AUTH_PROVIDERS, Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
