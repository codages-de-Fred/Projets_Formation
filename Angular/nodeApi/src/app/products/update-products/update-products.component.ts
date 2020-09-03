import { Component, OnInit } from '@angular/core';
import { ProductsServicesService } from '../services/products-services.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
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
  updateForm: FormGroup;
  categories: Categories[];

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
      this.updateForm = this.createForm();
      this.getCategories();
    })
  }

  getCategories() {
    return this.categoriesService.getAll().subscribe((data) => this.categories = data);
  }

  createForm(): FormGroup {
    if(this.product) {
      return this.fb.group({
        name: [this.product.name],
        description: [this.product.description],
        price: [this.product.price],
        categories: [this.product.categories]
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


