import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OneFormatService {

  private url: string = "https://localhost:8000/format";

  constructor(private http: HttpClient) { }

  getOne(id: number) {
    return this.http.get(this.url+"/"+id);
  }
}
