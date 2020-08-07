import { Component, OnInit } from '@angular/core';
import { GenreService } from "../services/genre.service";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.genreService.getAll().subscribe(data => console.log(data));
  }

}
