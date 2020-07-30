import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  id: number;
  hero: Hero;
  //on récupère la route qu'il l'a amenée ici
  constructor(private route : ActivatedRoute, private heroService: HeroService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    //+ transforme une string (de la route) en number, on puvait utiliser parseInt()
    //snapshot = on prend on capture de la route, au cas où si la route change
    //paraMap = structure qui contient les paramètres
    //get('id') renvoie l'id
    //=> on récupère l'id ds les paramètres de la route qu'on a captée
    this.getHero();
  }

  getHero() {
    //on utilise subscribe car la fct renvoie un Observable
    this.heroService.getHero(this.id).subscribe((data) => this.hero = data)
  }

  save() {
    this.heroService.updateHero(this.hero).subscribe();
    //rien ds subscribe car on n'en a pas besoin, updateHero() s'en charge
  }

}
