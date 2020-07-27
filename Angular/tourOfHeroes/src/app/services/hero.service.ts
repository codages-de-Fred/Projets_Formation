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
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
