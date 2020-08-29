import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Categories } from "../categories";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesServicesService {

  private url: string = "http://localhost:4000/categories";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.url);
  }

  getOne(id: string): Observable<Categories>{
    return this.http.get<Categories>(`${this.url}/${id}`);
  }

  add(categorie: object): Observable<Categories>{
    return this.http.post<Categories>(this.url, categorie);
  }

  update(id: string, categorie: object): Observable<object>{
    return this.http.put<object>(`${this.url}/${id}`, categorie);
  }

  delete(id: string): Observable<Categories>{
    return this.http.delete<Categories>(`${this.url}/${id}`);
  }
}