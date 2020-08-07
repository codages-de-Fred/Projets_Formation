import { Component, OnInit } from '@angular/core';
import { GenreService } from "../services/genre.service";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  constructor(private genreService: GenreService) { }

  genres: object;

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.genreService.getAll().subscribe(
      data => {
        this.genres = data,
        console.log(data)});
  }

  delete(id: number) {
    this.genreService.delete(id).subscribe(() => {
      this.getAll();
    });
  }

  add(name: string) {
    let genre = { name : name }
    this.genreService.create(genre).subscribe(() => {
      this.getAll();
    });

  }
}
