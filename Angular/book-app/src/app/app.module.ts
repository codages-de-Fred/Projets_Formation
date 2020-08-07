import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenreComponent } from './genre/genre.component';
import { HttpClientModule } from "@angular/common/http";
import { OneGenreComponent } from './one-genre/one-genre.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    OneGenreComponent,
    UpdateGenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
