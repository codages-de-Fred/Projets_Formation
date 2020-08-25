import { Component, OnInit } from '@angular/core';
import { UpdateService } from "../services/update.service";
import { OneGenreService } from "../services/one-genre.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-genre',
  templateUrl: './update-genre.component.html',
  styleUrls: ['./update-genre.component.css']
})
export class UpdateGenreComponent implements OnInit {

  id: number;
  genre: object;

  constructor(private update: UpdateService, private route: ActivatedRoute, private router: Router, private oneGenre: OneGenreService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.oneGenre.getOneGenre(params.id).subscribe(data => {
        this.genre = data;
      });
    })
  }

  updateGenre(name: string) {
    let genre = {name: name}
    this.update.update(this.id, genre).subscribe(() => this.redirectToRoute());
  }

  redirectToRoute() {
    this.router.navigate(['/genre']);
  }

}
