import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  //pour gérer les demandes asynchrones (en attendant le téléchargement de la demande)
  //Observable est un objet qui attend de recevoir ttes les données pour les envoyer
  //of est pour l'Observable
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  //pour hero-detail
  getHero(id: number): Observable<Hero> {
    //cherche le hero où son id est égal à celui envoyé en paramètre
    return of(HEROES.find(hero => hero.id === id));
  }
}
