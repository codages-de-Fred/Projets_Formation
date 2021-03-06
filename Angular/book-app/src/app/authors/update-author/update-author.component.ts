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

  dateDod: string;
  id: number;
  updateAuthor: Author;
  changeForm: FormGroup;
  dateForm: FormGroup;
  editDateForm: FormGroup;
  changeDate: boolean = false;

  firstname;
  lastname;
  nationality;
  dob;
  dod;
  dead: boolean;

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params.author);
    this.service.getOneAuthor(this.id).subscribe(
      data => {this.updateAuthor=data;
      this.changeForm = this.createChangeForm(this.updateAuthor);
      });
  }

  createChangeForm(author: Author): FormGroup {
    console.log(author.dod)
    return this.fb.group({
      firstName: [author.firstName],
      lastName: [author.lastName],
      nationality: [author.nationality],
      dead: Boolean
    }) 
  }
  

  changeDateForm() {
    this.editDateForm = this.newDateForm();
    this.changeDate = true;
  }

  newDateForm(): FormGroup {
    return this.fb.group({
      dob: [""],
      dod: [""]
    })
  }

  update() {
    if (this.changeDate) {
      this.dob = Object.values(this.editDateForm.value)[0];
      this.dod = Object.values(this.editDateForm.value)[1];
      console.log("change")
    } else {
      this.dob = this.updateAuthor.dob;
      this.dod = this.updateAuthor.dod;
      console.log("ok")
    }
    this.firstname = Object.values(this.changeForm.value)[0];
    this.lastname = Object.values(this.changeForm.value)[1];
    this.nationality = Object.values(this.changeForm.value)[2];
    const newAuthor = {
      firstName: this.firstname,
      lastName: this.lastname,
      nationality: this.nationality,
      dob: this.dob,
      dod: this.dod,
      dead: this.dead,
    };
    
    if (!newAuthor.dod) {
      newAuthor.dead = false;
      newAuthor.dod = null;
    } else {
      newAuthor.dead = true;
    }
    return this.service.update(newAuthor, this.id).subscribe(() => 
      this.router.navigate(["/author"])
    );
  }

}
