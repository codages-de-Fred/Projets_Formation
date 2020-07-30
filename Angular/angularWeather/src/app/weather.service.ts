import { Injectable } from '@angular/core';
//on a besoin du httpClientModule (de app.module.ts) pour avoir httpClient
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiCity = "Montpellier"
  apiKey = "e8957783416e87856805665674eece43";
  apiUrl = "http://api.openweathermap.org/data/2.5/weather?q="+ this.apiCity + "&appid=" + this.apiKey + "&units=metric&lang=fr";

  constructor(private http: HttpClient) { }

  getCurrentWeather(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  newCityUrl(x: string) {
    return "http://api.openweathermap.org/data/2.5/weather?q="+ x + "&appid=" + this.apiKey + "&units=metric&lang=fr";
  }

  getWeatherByCity(x) {
    return this.http.get(this.newCityUrl(x));
  }
}
