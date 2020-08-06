import { Component, OnInit } from '@angular/core';
import { SearchByNameService } from "../service/search-by-name.service";

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {

  constructor(private search: SearchByNameService) { }

  liste: object;
  nothing: boolean;

  ngOnInit(): void {
  }

  getList(name: string) {
    this.search.getName(name).subscribe(data => {
      this.liste = (data); 
      if (this.liste) {
        this.nothing = false;
        return this.liste;
      } else {
        this.nothing = true;
      }
    });

  }
}
