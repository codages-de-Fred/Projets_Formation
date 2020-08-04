import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCocktailsComponent } from './list-cocktails/list-cocktails.component';

import { HttpClientModule } from "@angular/common/http";
import { ListIngredientsComponent } from './list-ingredients/list-ingredients.component';
import { ListCocktailByIngredientComponent } from './list-cocktail-by-ingredient/list-cocktail-by-ingredient.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCocktailsComponent,
    ListIngredientsComponent,
    ListCocktailByIngredientComponent,
    CocktailComponent,
    SearchByNameComponent
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
