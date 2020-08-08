import { Component, OnInit } from '@angular/core';
import { AllFormatsService } from "../services/all-formats.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-all-formats',
  templateUrl: './all-formats.component.html',
  styleUrls: ['./all-formats.component.css']
})
export class AllFormatsComponent implements OnInit {

  formats: object;
  checkoutForm: object;

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
    this.allFormats.getAll().subscribe(data => console.log(data));
    return this.allFormats.getAll().subscribe(data => this.formats = (data));
  }

  delete(id: number) {
    this.allFormats.delete(id).subscribe(() => this.getAll());
  }

  addFormat(form: object) {
    let format = {
      name : Object.values(form)[0],
      height : Object.values(form)[1],
      width: Object.values(form)[2],
      landscape: Boolean(Object.values(form)[3])
    };
    return this.allFormats.addFormat(format).subscribe(() => this.getAll());
  }
}
