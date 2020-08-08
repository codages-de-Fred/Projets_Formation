import { Component, OnInit } from '@angular/core';
import { OneFormatService } from "../services/one-format.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-one-format',
  templateUrl: './one-format.component.html',
  styleUrls: ['./one-format.component.css']
})
export class OneFormatComponent implements OnInit {

  id:number;
  format: object;

  constructor(private oneFormat: OneFormatService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params.id);
    this.getOne(this.id);;
  }
  
  getOne(id: number) {
    this.oneFormat.getOne(id).subscribe(data => console.log(data));
    return this.oneFormat.getOne(id).subscribe(data => this.format = data);
  }
}
