import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListCocktailsService {

  constructor(private http: HttpClient) { }

  getList(letter: string): Observable<any> {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
  }
}
