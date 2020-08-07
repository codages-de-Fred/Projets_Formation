import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OneGenreService {

  private url = "https://localhost:8000/genre";

  constructor(private http: HttpClient) { }

  getOneGenre(id) {
    return this.http.get(this.url+"/"+id);
  }
}
