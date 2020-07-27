import { Component, OnInit } from '@angular/core';
//on import Hero qu'on a créé
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //on récupère le tableau HEROES de mock-heroes.ts
  heroes: Hero[]; //les: indiquent le type attendu
  //pour afficher le hero sélectionné
  selectedHero: Hero;

  //En indiquant la présence d'un service ds le constructor de notre component
  //on idique à angular la nécessité d'injecter ledit service ds une propriété privée pour pouvoir l'utiliser
  //en précisant private, angular rangera automatiquement le service ds une propriété privée qu'on pourra utiliser avec this.heroService
  constructor(private heroService: HeroService) { }
  //lors de l'initialisation de la page
  //ngAfterViewInit() est équivalent de DOMLoadedContent
  ngOnInit(): void {
    //pour l'afficher
    this.getHeroes();
  }
  //déclare une fct permettant de sélectionner un héro
  //cette fct est appelée ds app.component.html
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    //subscribe est l'équivalent du addEventListener('load')
    //il intervient pour l'Observable donc pour le comportement asynchrone
    //donc comme pour le addEventListener('load'), on renvoie une fct qui est ici renvoi la liste des heroes
    this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes);
  }

}
