import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { GenreComponent } from './genres/genre/genre.component';
import { OneGenreComponent } from './genres/one-genre/one-genre.component';
import { UpdateGenreComponent } from './genres/update-genre/update-genre.component';
import { AllFormatsComponent } from './formats/all-formats/all-formats.component';
import { OneFormatComponent } from './formats/one-format/one-format.component';
import { UpdateFormatComponent } from './formats/update-format/update-format.component';
import { AllAuthorsComponent } from './authors/all-authors/all-authors.component';
import { UpdateAuthorComponent } from './authors/update-author/update-author.component';
import { AuthComponent } from './auth/auth.component';

import { AuthInterceptor } from "./auth/authInterceptor";

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    OneGenreComponent,
    UpdateGenreComponent,
    AllFormatsComponent,
    OneFormatComponent,
    UpdateFormatComponent,
    AllAuthorsComponent,
    UpdateAuthorComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
