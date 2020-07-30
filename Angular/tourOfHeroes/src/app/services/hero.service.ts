import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { of, Observable, from } from 'rxjs';
//pour effectuer des requêtes
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private http: HttpClient) { }

  //pour gérer les demandes asynchrones (en attendant le téléchargement de la demande)
  //Observable est un objet qui attend de recevoir ttes les données pour les envoyer
  getHeroes(): Observable<Hero[]> {
    //avec get la conversion JSON se fait automatiquement
    //on effectue une requête get vers l'url api/heroes
    //on indique à get que les données vont être ss forme de tableau
    return this.http.get<Hero[]>("api/heroes");
  }
  //pour hero-detail
  getHero(id: number): Observable<Hero> {
    //cherche le hero où son id est égal à celui envoyé en paramètre
    return of(HEROES.find(hero => hero.id === id));
  }
}
