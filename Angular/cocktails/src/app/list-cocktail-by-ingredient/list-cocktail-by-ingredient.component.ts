import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ListCocktailByIngredientService } from "../service/list-cocktail-by-ingredient.service";

@Component({
  selector: 'app-list-cocktail-by-ingredient',
  templateUrl: './list-cocktail-by-ingredient.component.html',
  styleUrls: ['./list-cocktail-by-ingredient.component.css']
})
export class ListCocktailByIngredientComponent implements OnInit {

  constructor(private list: ListCocktailByIngredientService, private route: ActivatedRoute) { }

  ingredient: string;
  listCocktails: object;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ingredient = params.ingredient;
    })
    this.getList(this.ingredient);
  }
  getList(ingredient: string) {
    this.list.getListByIngredients(ingredient).subscribe(data => console.log(data));
    return this.list.getListByIngredients(ingredient).subscribe(data => this.listCocktails = (data));
  }

}
