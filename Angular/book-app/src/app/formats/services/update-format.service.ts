import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UpdateFormatService {

  private url: string = "https://localhost:8000/format";

  constructor(private http: HttpClient) { }

  updateFormat(id: number, name: object) {
    return this.http.put(this.url+"/"+id, name);
  }
}
