import { Component, OnInit } from '@angular/core';
import { AllFormatsService } from "../services/all-formats.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-all-formats',
  templateUrl: './all-formats.component.html',
  styleUrls: ['./all-formats.component.css']
})
export class AllFormatsComponent implements OnInit {

  formats: object;
  checkoutForm: FormGroup;

  constructor(private allFormats: AllFormatsService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      height: '',
      width: '',
      landscape: Boolean
    })
   }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.allFormats.getAll().subscribe(data => this.formats = (data));
  }

  delete(id: number) {
    this.allFormats.delete(id).subscribe(() => this.getAll());
  }

  addFormat(form: object) {
    let format = this.checkoutForm.value;
    //convertir 1 ou 0 en true/false
    format.landscape = format.landscape === "1" ? true : false;
    return this.allFormats.addFormat(format).subscribe(() => this.getAll());
  }
}
