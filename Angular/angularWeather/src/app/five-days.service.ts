import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiveDaysService {

  city = "Montpellier";
  apiKey = "e8957783416e87856805665674eece43";
  apiUrl = "api.openweathermap.org/data/2.5/forecast?q="+this.city+"&appid="+this.apiKey+"&units=metric&lang=fr";

  constructor(private http: HttpClient) { }

  getFiveDaysWeather(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
