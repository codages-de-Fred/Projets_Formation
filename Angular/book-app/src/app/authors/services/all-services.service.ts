import { Injectable } from '@angular/core';
/**
 * échanges des données avec symfony pour l'entité author
 * gestion des auteurs
 */
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Author } from "../author";

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  private url: string = "https://localhost:8000/author";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.url);
  }

  getOneAuthor(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.url}/${id}`);
  }

  create(author: Author): Observable<Author> {
    return this.http.post<Author>(this.url, author);
  }

  update(author: object, id: number): Observable<object> {
    return this.http.put<object>(`${this.url}/${id}`, author);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
