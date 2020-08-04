import { Component, OnInit } from '@angular/core';
import { ListCocktailsService } from "../service/list-cocktails.service";

@Component({
  selector: 'app-list-cocktails',
  templateUrl: './list-cocktails.component.html',
  styleUrls: ['./list-cocktails.component.css']
})
export class ListCocktailsComponent implements OnInit {

  constructor(private list: ListCocktailsService) { }

  letter: string;
  listCocktail: object;
  ingredientsList: object;

  ngOnInit(): void {
  }

  getList(letter: string) {
    if(letter.length < 2) {
      this.list.getList(letter).subscribe(data => console.log(data));
      return this.list.getList(letter).subscribe(data => this.listCocktail = data);
    }
  }

  getIngredients(id: string) {

  }

}
