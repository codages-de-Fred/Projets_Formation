import { Component, OnInit } from '@angular/core';
//on import Hero qu'on a créé
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //définit un héros de type Hero
  hero: Hero = {
    id: 1,
    name: 'Patman'
  }
  //on récupère le tableau HEROES de mock-heroes.ts
  heroes = HEROES;
  //pour afficher le hero sélectionné
  selectedHero: Hero;

  constructor() { }
  //lors de l'initialisation de la page
  //ngAfterViewInit() est équivalent de DOMLoadedContent
  ngOnInit(): void {
  }
  //déclare une fct permettant de sélectionner un héro
  //cette fct est appelée ds app.component.html
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
