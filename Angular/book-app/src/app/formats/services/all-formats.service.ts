import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AllFormatsService {

  private url: string = "https://localhost:8000/format";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  delete(id) {
    return this.http.delete(this.url+"/"+id);
  }
}
