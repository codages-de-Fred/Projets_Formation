import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { Observable } from 'rxjs';
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
    return this.http.get<Hero>('api/heroes/'+id);
  }
  updateHero(hero: Hero): Observable<any> {
    //pour est pour remplacer une ressource avec une ressource de même type
    //pour mettre à jour les données
    return this.http.put("api/heroes", hero);
  }
  createHero(hero: Hero): Observable<Hero> {
    //pour créer une ressource on utilise la méthode POST
    return this.http.post<Hero>("api/heroes", hero);
  }
}
