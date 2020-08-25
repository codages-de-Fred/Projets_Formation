import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenreComponent } from './genres/genre/genre.component';
import { OneGenreComponent } from "./genres/one-genre/one-genre.component";
import { UpdateGenreComponent } from "./genres/update-genre/update-genre.component";

import { AllFormatsComponent } from "./formats/all-formats/all-formats.component";
import { OneFormatComponent } from "./formats/one-format/one-format.component";
import { UpdateFormatComponent } from "./formats/update-format/update-format.component";

import { AllAuthorsComponent } from "./authors/all-authors/all-authors.component";
import { UpdateAuthorComponent } from "./authors/update-author/update-author.component";

const routes: Routes = [
  { path: 'genre', component: GenreComponent},
  { path: 'oneGenre/:id', component: OneGenreComponent},
  { path: 'updateGenre/:id', component: UpdateGenreComponent },
  { path: 'format', component: AllFormatsComponent},
  { path: 'oneFormat/:id', component: OneFormatComponent},
  { path: 'updateFormat/:format', component: UpdateFormatComponent},
  { path: 'author', component: AllAuthorsComponent },
  { path: 'update-author/:author', component: UpdateAuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
