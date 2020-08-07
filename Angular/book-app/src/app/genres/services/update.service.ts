import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private url = "https://localhost:8000/genre";

  constructor(private http: HttpClient) { }

  update(id: number, name: object) {
    return this.http.put(this.url+"/"+id, name);
  }
}
