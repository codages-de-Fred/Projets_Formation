import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchNominationService {

  constructor(private http: HttpClient) { }

  newCity(city: string) {
    return "https://nominatim.openstreetmap.org/search?city="+city+"&format=json";
  }
  getCity(city: string): Observable<any> {
    return this.http.get(this.newCity(city));
  }

}
