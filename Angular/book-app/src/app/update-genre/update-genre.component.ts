import { Component, OnInit } from '@angular/core';
import { UpdateService } from "../services/update.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-genre',
  templateUrl: './update-genre.component.html',
  styleUrls: ['./update-genre.component.css']
})
export class UpdateGenreComponent implements OnInit {

  id;

  constructor(private update: UpdateService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    })
  }

  updateGenre(name) {
    let genre = {name: name}
    this.update.update(this.id, genre).subscribe(() => this.redirectToRoute());
  }

  redirectToRoute() {
    this.router.navigate(['/genre']);
  }

}
