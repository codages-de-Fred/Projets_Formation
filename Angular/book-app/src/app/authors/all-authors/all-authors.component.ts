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

  oneAuthor: Author;
  authors: Author[];
  formAdd: FormGroup;

  accesFormulaireAdd: boolean = false;
  accesDetail: boolean = false;
  accesListe: boolean = true;

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {this.authors = data; console.log(data)});
  }

  changeAccesFormulaireAdd(): void {
    this.accesFormulaireAdd = !this.accesFormulaireAdd;
    this.accesListe = !this.accesListe;
  }

  changeAccesDetail(): void {
    this.accesDetail = !this.accesDetail;
    this.accesListe = !this.accesListe;
  }

  createFormAdd(): FormGroup {
    return this.fb.group({
      firstName: [''],
      lastName: [''],
      nationality: [''],
      dob: [''],
      dod: [''],
      dead: Boolean
    }) 
  }
  
  afficheForm(): void {
    this.changeAccesFormulaireAdd();
    this.formAdd = this.createFormAdd();
  }

  createAuthor() {
    const newAuthor = this.formAdd.value;
    if (!newAuthor.dod) {
      newAuthor.dead = false;
      newAuthor.dod = null;
    } else {
      newAuthor.dead = true;
    }
    console.log(newAuthor)
    this.changeAccesFormulaireAdd();
    return this.service.create(newAuthor).subscribe(() => this.ngOnInit());
  }

  selectAuthor(author: Author) {
    this.changeAccesDetail();
    return this.service.getOneAuthor(author.id).subscribe((data) => {this.oneAuthor = data});
  }

  reduceAuthor(): void {
    this.oneAuthor.firstName = "";
    this.oneAuthor.lastName = "";
    this.oneAuthor.nationality = "";
    this.oneAuthor.dob = "";
    this.oneAuthor.dod = "";
    this.changeAccesDetail();
    console.log(this.oneAuthor)
  }

  delete(author: Author) {
    const authorIndex = this.authors.findIndex(a => a.id === author.id);
    this.authors = this.authors.filter(a => a.id != author.id );
    this.service.delete(author.id).subscribe(
      () => console.log("supprimé"), 
      err => this.authors.splice(authorIndex, 0, author)
      );
  }
}
