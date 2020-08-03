import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { SearchNominationComponent } from './search-nomination/search-nomination.component';

import fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SearchNominationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    //permet de définir la locale par défaut en français
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
