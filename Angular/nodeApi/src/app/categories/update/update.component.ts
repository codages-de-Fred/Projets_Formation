import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ServiceService } from "../services/service.service";
import { Categories } from '../categories';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private service: ServiceService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  category: Categories;
  id: string;

  updateForm: FormGroup;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.getOne(this.id);
    })
  }

  getOne(id: string) {
    this.service.getOne(id).subscribe((data) => {
      this.category = data;
      this.updateForm = this.createForm();
    });
  }

  createForm(): FormGroup {
    if (this.category) {
      return this.fb.group({
        name: [this.category.name],
        description: [this.category.description],
      });
    }
  }

  update() {
    const newCategory = this.updateForm.value;
    return this.service.update(this.id, newCategory).subscribe(() => {
      this.router.navigate(['/categories']);
    });
  }

}
