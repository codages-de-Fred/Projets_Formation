import { Component, OnInit } from '@angular/core';
import { ProductsServicesService } from '../services/products-services.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
import { Product } from "../products";
import { Categories } from "../../categories/categories";
import { CategoriesServicesService } from "../../categories/services/categories-services.service";

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

  product: Product;
  productCategories: Array<any>;
  categories: Categories[];

  updateForm: FormGroup;

  noChecked: boolean = true;

  constructor(private service: ProductsServicesService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private categoriesService: CategoriesServicesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.initProduct(params.id);
    });
  }
  //récupère le produit à modifier
  initProduct(id: string) {
    return this.service.getOneProduct(id).subscribe((data) => {
      this.product = data;
      this.productCategories = this.product.categories;
      this.updateForm = this.createForm();
      this.getCategories();
    })
  }

  //récupère la liste des catégories
  getCategories() {
    return this.categoriesService.getAll().subscribe((data) => this.categories = data);
  }

  createForm(): FormGroup {
    if(this.product) {
      return this.fb.group({
        name: [this.product.name],
        description: [this.product.description],
        price: [this.product.price],
        categories: this.fb.array(this.product.categories)
      });
    }
  }

  //récupère les catégories du product en les mettant checked ds la checkbox 
  checked(e) {
    let valid = false;
    this.noChecked = true;
    this.productCategories.forEach(element => {
      if (element === e) {
        valid = true;
        this.noChecked = false;
        return valid;
      }
    });
    return valid;
  }

  //les modifications de statut des checkbox
  saveModificationsCheckbox(e) {
    const categories: FormArray = this.updateForm.get('categories') as FormArray;
    if (e.target.checked) {
      categories.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      categories.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          categories.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  update() {
    let updateProduct: Product = this.updateForm.value;
    updateProduct.categories.push()
    return this.service.update(updateProduct, this.product._id).subscribe(() => {
      return this.router.navigate(["/product"]);
    });
  }
}


