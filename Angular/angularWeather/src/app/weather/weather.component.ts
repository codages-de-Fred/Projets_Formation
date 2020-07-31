import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: object;
  current: string = "hourly,daily";
  lat: string;
  lon: string;

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //on récupère les paramètres envoyés lors du choix de la ville
    this.lat = this.route.snapshot.paramMap.get('lat');
    this.lon = this.route.snapshot.paramMap.get('lon');
    this.getWeather(this.current);
  }

  getWeather(choice: any): void {
    this.weatherService.getWeather(this.lat,this.lon, choice).subscribe((data) => this.weather = (data));
  }

}
