import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Genre } from "../genre";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  //url de symfony
  private url = "https://localhost:8000/genre";

  //HttpClient permet de gérer les requêtes vers symfony
  constructor(private http: HttpClient) { }

  //get récupère
  getAll() {
    return this.http.get(this.url);
  }
  //delete supprime le genre sélectionné
  delete(id: number) {
    return this.http.delete(this.url+"/"+id);
  }
  //créer un nouveau genre (ici on a besoin que du nom du nouveau genre)
  create(name: object): Observable<Genre> {
    return this.http.post<Genre>(this.url, name);
  }
}
