import { Component, OnInit } from '@angular/core';
import { AllFormatsService } from "../services/all-formats.service";

@Component({
  selector: 'app-all-formats',
  templateUrl: './all-formats.component.html',
  styleUrls: ['./all-formats.component.css']
})
export class AllFormatsComponent implements OnInit {

  formats: object;

  constructor(private allFormats: AllFormatsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.allFormats.getAll().subscribe(data => console.log(data));
    return this.allFormats.getAll().subscribe(data => this.formats = (data));
  }

  delete(id) {
    this.allFormats.delete(id).subscribe(() => this.getAll());
  }

}
