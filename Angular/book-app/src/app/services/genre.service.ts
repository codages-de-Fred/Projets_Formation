import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private url = "https://localhost:8000/genre";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }
  delete(id: number) {
    return this.http.delete(this.url+"/"+id);
  }
  create(name) {
    return this.http.post(this.url, name);
  }
}
