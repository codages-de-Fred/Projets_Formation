import { Component, OnInit } from '@angular/core';
import { Categories } from "../categories";
import { ServiceService } from "../services/service.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Categories[];
  category: object;
  addForm: FormGroup;

  displayAdd: boolean = false;
  displayOne: boolean = false;

  constructor(private service: ServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAll(); 
  }

  getAll() {
    return this.service.getAll().subscribe((data) => {
      this.categories = data;
    });
  }

  getOne(category: Categories) {
    return this.service.getOne(category._id).subscribe((data) => {
      this.category = data;
      this.changeOne();
    });
  }

  /***** ajout d'une catégorie **************** */
  beginForm() {
    this.addForm = this.createForm();
    this.changeAdd();
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: [''],
      description: ['']
    })
  }

  add() {
    const newCategory = this.addForm.value;
    console.log(newCategory)
    return this.service.add(newCategory).subscribe(() => {
      this.getAll();
      this.changeAdd();
    });
  }

  /**** supprimer une catégorie ************* */
  delete(category: Categories) {
    const id = category._id;
    return this.service.delete(id).subscribe(() => {
      this.getAll();
    });
  }

  changeAdd(): void {
    this.displayAdd = !this.displayAdd;
  }
  changeOne(): void {
    this.displayOne = !this.displayOne;
  }

}
