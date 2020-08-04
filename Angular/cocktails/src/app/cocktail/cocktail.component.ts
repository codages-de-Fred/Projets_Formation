import { Component, OnInit } from '@angular/core';
import { CocktailService } from "../service/cocktail.service";
import { ActivatedRoute } from "@angular/router";
//location permet d'enregistrer l'adresse précédente
import { Location } from '@angular/common';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {

  constructor(private cocktail: CocktailService, private route: ActivatedRoute, private location: Location) { }

  name: string;
  thisCocktail: object

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params.name;
    })
    this.getCocktail(this.name);
  }

  getCocktail(name: string) {
    this.cocktail.getCocktail(name).subscribe(data => console.log(data))
    return this.cocktail.getCocktail(name).subscribe(data => this.thisCocktail = (data))
  }
  //retour à l'affichage précédent
  goback() {
    this.location.back();
  }

}
