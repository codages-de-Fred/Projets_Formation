import { Component, OnInit } from '@angular/core';
import { ProductsServicesService } from "../services/products-services.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Product } from '../products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: object[];
  addForm;
  product: Product;

  displayDetail: boolean = false;
  displayAdd: boolean = false;

  constructor(private service: ProductsServicesService, private fb: FormBuilder) { }

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
    this.reduceAdd();
    return this.fb.group({
      name: [''],
      description: [''],
      price: Number
    })
  }

  addProduct() {
    const newProduct = this.addForm.value;
    this.service.addProduct(newProduct).subscribe(() => this.getAllProducts());
    this.reduceAdd();
    return this.addForm = "";
  }

  /** récupère un seul produit *************** */
  getOneProduct(product: Product) {
    if(product._id) {
      this.displayDetail = true;
      const id = product._id
      return this.service.getOneProduct(id).subscribe(data => this.product = data);
    }
  }

  /**** supprimer un produit sélectionné ********** */
  delete(product: Product) {
    return this.service.delete(product._id).subscribe(() => this.getAllProducts());
  }

  /**** réducteurs de div***************** */
  reduce(): void {
    this.displayDetail = false;
  }
  reduceAdd(): void {
    this.displayAdd = !this.displayAdd;
  }  

}
