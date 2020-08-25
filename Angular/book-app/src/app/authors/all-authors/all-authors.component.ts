import { Component, OnInit } from '@angular/core';
import { AllServicesService } from "../services/all-services.service";

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
