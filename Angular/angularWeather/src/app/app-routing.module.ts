import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiveDaysComponent } from './five-days/five-days.component';

const routes: Routes = [
  { path: "five-days", component: FiveDaysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
