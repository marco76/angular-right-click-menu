import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import {importProvidersFrom} from "@angular/core";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    provideAnimations()
]
}).catch((err) => console.error(err));
