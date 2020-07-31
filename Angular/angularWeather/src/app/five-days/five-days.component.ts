import { Component, OnInit } from '@angular/core';
import { FiveDaysService } from '../five-days.service';

@Component({
  selector: 'app-five-days',
  templateUrl: './five-days.component.html',
  styleUrls: ['./five-days.component.css']
})
export class FiveDaysComponent implements OnInit {

  constructor(private fiveDaysService: FiveDaysService) { }

  ngOnInit(): void {
    this.fiveDaysService.getFiveDaysWeather().subscribe( (data) => console.log(data));
  }

}
