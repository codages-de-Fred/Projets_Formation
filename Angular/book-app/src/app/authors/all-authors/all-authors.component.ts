import { Component, OnInit } from '@angular/core';
import { AllServicesService } from "../services/all-services.service";
import { Author } from '../author';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {

  constructor(private service: AllServicesService, private fb: FormBuilder) { }

  authors: Author[];
  formAdd: FormGroup;

  accesFormulaireAdd: boolean = false;
  accesDetail: boolean = false;

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {this.authors = data; console.log(data)});
  }

  changeAccesFormulaireAdd(): void {
    this.accesFormulaireAdd = !this.accesFormulaireAdd;
  }

  changeAccesDetail(): void {
    this.accesDetail = !this.accesDetail;
  }

  createFormAdd(): FormGroup {
    return this.fb.group({
      firstname: [''],
      lastname: [''],
      nationality: [''],
      dob: [''],
      dod: [''],
      dead: Boolean
    }) 
  }
  
  afficheForm(): void {
    this.accesFormulaireAdd = true;
    this.formAdd = this.createFormAdd();
  }

  createAuthor() {
    const newAuthor = this.formAdd.value;
    if (!newAuthor.dod) {
      newAuthor.dead = false;
    } else {
      newAuthor.dead = true;
    }
    this.changeAccesFormulaireAdd();
    return this.service.create(newAuthor).subscribe(() => console.log("ok"));
  }
}
