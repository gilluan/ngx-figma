import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxFigmaComponent } from 'projects/ngx-figma/src/public_api';


@NgModule({
  declarations: [
    AppComponent,
    NgxFigmaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
