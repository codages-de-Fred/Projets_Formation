import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListCocktailByIngredientService {

  constructor(private http: HttpClient) { }

  getListByIngredients(ingredient: string): Observable<any> {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  }
}
