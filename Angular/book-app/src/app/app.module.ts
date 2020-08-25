import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { GenreComponent } from './genres/genre/genre.component';
import { OneGenreComponent } from './genres/one-genre/one-genre.component';
import { UpdateGenreComponent } from './genres/update-genre/update-genre.component';
import { AllFormatsComponent } from './formats/all-formats/all-formats.component';
import { OneFormatComponent } from './formats/one-format/one-format.component';
import { UpdateFormatComponent } from './formats/update-format/update-format.component';
import { AllAuthorsComponent } from './authors/all-authors/all-authors.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    OneGenreComponent,
    UpdateGenreComponent,
    AllFormatsComponent,
    OneFormatComponent,
    UpdateFormatComponent,
    AllAuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
