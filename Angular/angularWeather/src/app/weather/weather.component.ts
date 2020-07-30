import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: object;
  city: string = "Montpellier";

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather().subscribe((data) => this.weather = data);
    this.weatherService.getCurrentWeather().subscribe( (data) => console.log(data));
  }

  getWeatherCity(city) {
    this.weatherService.getWeatherByCity(city).subscribe((data) => this.weather = data);
  }

}
