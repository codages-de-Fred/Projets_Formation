import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCocktailsComponent } from "./list-cocktails/list-cocktails.component";
import { ListIngredientsComponent } from "./list-ingredients/list-ingredients.component";
import { ListCocktailByIngredientComponent } from "./list-cocktail-by-ingredient/list-cocktail-by-ingredient.component";
import { CocktailComponent } from "./cocktail/cocktail.component";
import { SearchByNameComponent } from "./search-by-name/search-by-name.component";

const routes: Routes = [
  { path: "listIngredients", component: ListIngredientsComponent},
  { path: "listByIngredient/:ingredient", component: ListCocktailByIngredientComponent },
  { path: "listCocktails", component: ListCocktailsComponent},
  { path: "cocktail/:name", component: CocktailComponent},
  { path: "search", component: SearchByNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
