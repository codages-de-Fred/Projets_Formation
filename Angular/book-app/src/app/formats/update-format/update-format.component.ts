import { Component, OnInit } from '@angular/core';
import { UpdateFormatService } from "../services/update-format.service";
import { OneFormatService } from "../services/one-format.service";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-update-format',
  templateUrl: './update-format.component.html',
  styleUrls: ['./update-format.component.css']
})
export class UpdateFormatComponent implements OnInit {

  checkoutForm;
  idFormat: number;
  format: object
  newFormat: object;

  constructor(private updateFormat: UpdateFormatService, private route: ActivatedRoute, private fb: FormBuilder, private oneFormat: OneFormatService, private router: Router) { 
    this.checkoutForm = this.fb.group({
      name: '',
      height: '',
      width: '',
      landscape: Boolean
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idFormat = params.format;
      this.oneFormat.getOne(this.idFormat).subscribe((data) => {
        this.format=(data);
      });
    })
  }

  updateThisFormat(form) {
    this.newFormat = {
      name: Object.values(form)[0],
      height: Object.values(form)[1],
      width: Object.values(form)[2],
      landscape: Boolean(Object.values(form)[3])
    }
    this.updateFormat.updateFormat(this.idFormat, this.newFormat).subscribe(() => {
      console.log(this.newFormat)
      this.router.navigate(['/format']);
    })
  }

}
