import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KvinZModule, MusicModule } from 'kvin-z/projects/kvin-z/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KvinZModule,
    MusicModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
