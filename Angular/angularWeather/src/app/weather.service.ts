import { Injectable } from '@angular/core';
//on a besoin du httpClientModule (de app.module.ts) pour avoir httpClient
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = "e8957783416e87856805665674eece43";

  constructor(private http: HttpClient) { }

  newCity(lat: string, lon: string, exclude: string) {
    return "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&lang=fr&exclude="+exclude+"&units=metric&appid="+this.apiKey;
  }

  getWeather(lat: string, lon: string, exclude: string): Observable<any> {
    return this.http.get(this.newCity(lat,lon, exclude));
  }
}
