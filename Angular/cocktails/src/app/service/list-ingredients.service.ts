import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListIngredientsService {

  constructor(private http: HttpClient) { }

  getListIngredients(): Observable<any> {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
  }
}
