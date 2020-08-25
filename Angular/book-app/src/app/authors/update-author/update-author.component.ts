import { Component, OnInit } from '@angular/core';
import { AllServicesService } from "../services/all-services.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Author } from '../author';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

  constructor(private service: AllServicesService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  id: number;
  updateAuthor: Author;
  changeForm: FormGroup;

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params.author);
    this.service.getOneAuthor(this.id).subscribe(
      data => {this.updateAuthor=data;
      this.changeForm = this.createForm(this.updateAuthor);
      });
  }

  createForm(author: Author): FormGroup {
    return this.fb.group({
      firstName: [author.firstName],
      lastName: [author.lastName],
      nationality: [author.nationality],
      dob: [new Date(author.dob).toLocaleDateString()],
      dod: [new Date(author.dod).toLocaleDateString()],
      dead: Boolean
    }) 
  }

  update() {
    const newAuthor = this.changeForm.value;
    if (!newAuthor.dod) {
      newAuthor.dead = false;
      newAuthor.dod = null;
    } else {
      newAuthor.dead = true;
    }
    return this.service.create(newAuthor).subscribe(() => 
      this.router.navigate(["/author"])
    );
  }

}
