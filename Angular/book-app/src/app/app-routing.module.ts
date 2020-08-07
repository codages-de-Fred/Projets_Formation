import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreComponent } from './genre/genre.component';
import { OneGenreComponent } from "./one-genre/one-genre.component";
import { UpdateGenreComponent } from "./update-genre/update-genre.component";

const routes: Routes = [
  { path: 'genre', component: GenreComponent},
  { path: 'oneGenre/:id', component: OneGenreComponent},
  { path: 'updateGenre/:id', component: UpdateGenreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
