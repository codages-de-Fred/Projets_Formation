import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../services/service.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: object[];
  addForm;
  product: Product;

  constructor(private service: ServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  //affiche ts les produits
  getAllProducts() {
    return this.service.getAllProducts().subscribe(data => this.products = data);
  }

  /**** ajouter un product ************************ */
  askAddForm() {
    this.addForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: [''],
      description: [''],
      price: Number
    })
  }

  addProduct() {
    const newProduct = this.addForm.value;
    this.service.addProduct(newProduct).subscribe(() => this.getAllProducts());
    return this.addForm = "";
  }

  /** récupère un seul produit *************** */
  getOneProduct(product: Product) {
    if(product._id) {
      const id = product._id
      return this.service.getOneProduct(id).subscribe(data => this.product = data);
    }
  }
}
