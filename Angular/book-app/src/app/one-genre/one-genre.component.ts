import { Component, OnInit } from '@angular/core';
import { OneGenreService } from "../services/one-genre.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-one-genre',
  templateUrl: './one-genre.component.html',
  styleUrls: ['./one-genre.component.css']
})
export class OneGenreComponent implements OnInit {

  id: number;
  genre: object;

  constructor(private oneGenre: OneGenreService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params.id);
    this.getOneGenre(this.id)
  }

  getOneGenre(id: number){
    this.oneGenre.getOneGenre(id).subscribe(data => this.genre = data);
  }

}
