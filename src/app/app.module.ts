import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// we need to import the menu trigger
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
