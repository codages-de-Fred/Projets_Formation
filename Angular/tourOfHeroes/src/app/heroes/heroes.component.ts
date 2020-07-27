import { Component, OnInit } from '@angular/core';
//on import Hero qu'on a créé
import { Hero } from '../hero';

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
  };

  constructor() { }
  //lors de l'initialisation de la page
  //ngAfterViewInit() est équivalent de DOMLoadedContent
  ngOnInit(): void {
  }

}
