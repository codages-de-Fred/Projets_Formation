import { Component, OnInit } from '@angular/core';
import { ListIngredientsService } from "../service/list-ingredients.service";

@Component({
  selector: 'app-list-ingredients',
  templateUrl: './list-ingredients.component.html',
  styleUrls: ['./list-ingredients.component.css']
})
export class ListIngredientsComponent implements OnInit {

  constructor(private list: ListIngredientsService) { }

  ingredients: object;

  ngOnInit(): void {
    this.list.getListIngredients().subscribe(data => console.log(data))
    this.list.getListIngredients().subscribe(data => this.ingredients = data);
  }

}
