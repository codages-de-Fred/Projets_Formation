//créer pour gérer les requêtes
//ce service a besion d'une base de données
import { Injectable } from '@angular/core';
//on import la fausse bdd d'angular qu'on a installé
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  //on créé la bdd avec cette fct angular
  //qui doit renvoyer un tableau => une bdd
  createDb() {
    let heroes = [
      { id : 1, name : 'Patman'},
      { id : 2, name : 'Jacquesman'},
      { id : 3, name : 'Chocomousseman'},
      { id : 4, name : 'Zimmerman'},
      { id : 5, name : 'Goldman'},
      { id : 6, name : 'Strauss-man'},
      { id : 7, name : 'Dr-Manhathan'},
    ];
    //return un objet
    return {heroes};
  }
}
