import { Component, OnInit } from '@angular/core';
import { GenreService } from "../services/genre.service";
import { FormBuilder, Form, FormGroup, Validators } from "@angular/forms";
import { Genre } from "../genre";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  constructor(private genreService: GenreService, private fb: FormBuilder) { }

  genres: object;
  createForm: FormGroup;

  ngOnInit(): void {
    this.getAll();
    this.createForm = this.fb.group(
      {
        //options de validations, ici doit être rempli et nb de caractère < 50
        name: ['', [Validators.required, Validators.maxLength(50)]]
      }
    )
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

  add(genre: Genre) {
    this.genreService.create(this.createForm.value).subscribe(() => {
      this.getAll();
    });
  }

  //pour faire un raccourci ds le html
  get name() {return this.createForm.get('name')}
}
