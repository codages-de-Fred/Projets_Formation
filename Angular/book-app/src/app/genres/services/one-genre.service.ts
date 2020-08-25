import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Genre } from '../genre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OneGenreService {

  private url = "https://localhost:8000/genre";

  constructor(private http: HttpClient) { }

  getOneGenre(id): Observable<Genre> {
    return this.http.get<Genre>(this.url+"/"+id);
  }
}
