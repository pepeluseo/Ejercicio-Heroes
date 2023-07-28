import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import localeES from '@angular/common/locales/es';
import { registerLocaleData} from "@angular/common";
registerLocaleData(localeES);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {EstructuraModule} from "./estructura/estructura.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    EstructuraModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es'}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
