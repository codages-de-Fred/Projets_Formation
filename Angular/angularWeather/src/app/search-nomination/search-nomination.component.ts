import { Component, OnInit } from '@angular/core';
import { SearchNominationService } from '../search-nomination.service'

@Component({
  selector: 'app-search-nomination',
  templateUrl: './search-nomination.component.html',
  styleUrls: ['./search-nomination.component.css']
})
export class SearchNominationComponent implements OnInit {

  constructor(private searchNominationService: SearchNominationService) { }

  cities: object;

  ngOnInit(): void {
  }

  getCity(cities: string) {
    this.searchNominationService.getCity(cities).subscribe( (data) => console.log((data) ));
    return this.searchNominationService.getCity(cities).subscribe( (data) => this.cities = data);
  } 

}
