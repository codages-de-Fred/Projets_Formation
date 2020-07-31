import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { SearchNominationComponent } from './search-nomination/search-nomination.component';

const routes: Routes = [
  //pour envoyer des paramètres
  { path: "weather/:lat/:lon", component: WeatherComponent },
  { path: "searchNomination", component: SearchNominationComponent},
  { path: "", redirectTo: "/searchNomination", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
