import { Component, OnInit } from '@angular/core';
import { ProductsServicesService } from "../services/products-services.service";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { Product } from '../products';
import { Categories } from "../../categories/categories";
import { CategoriesServicesService } from "../../categories/services/categories-services.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: object[];
  addForm: FormGroup;
  product: Product;
  arrayCategories : Array<any> = [];

  categories: Categories[];
  category: Categories;
  listCategoriesProduct = [];

  displayDetail: boolean = false;
  displayAdd: boolean = false;

  constructor(private service: ProductsServicesService, private fb: FormBuilder, private categoriesServive: CategoriesServicesService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  //affiche ts les produits
  getAllProducts() {
    return this.service.getAllProducts().subscribe(data => this.products = data);
  }

  /**** ajouter un product ************************ */
  askAddForm() {
    //on récupère la liste de catégories
    this.categoriesServive.getAll().subscribe((data) => {
      this.categories = data;
      this.addForm = this.createForm();
    })
  }

  createForm(): FormGroup {
    this.categoriesServive.getAll().subscribe((data) => {
      this.categories = data;
    })
    this.reduceAdd();
    return this.fb.group({
      name: [''],
      description: [''],
      price: Number,
      categories: ['']
    })
  }

  addProduct() {
    const newProduct: Product = this.addForm.value;
    console.log(this.addForm)
    console.log(this.addForm.value.categories.value.checked);
    console.log(newProduct)
    /*this.service.addProduct(newProduct).subscribe(() => this.getAllProducts());
    this.reduceAdd();
    return this.addForm = "";*/
  }

  /** récupère un seul produit *************** */
  getOneProduct(product: Product) {
    if(product._id) {
      this.displayDetail = true;
      const id = product._id
      return this.service.getOneProduct(id).subscribe(data => {
        this.product = data;
        });
    }
  }

  /**** supprimer un produit sélectionné ********** */
  delete(product: Product) {
    return this.service.delete(product._id).subscribe(() => this.getAllProducts());
  }

  /**** réducteurs de div***************** */
  reduce(): void {
    this.listCategoriesProduct = [];
    this.displayDetail = false;
  }
  reduceAdd(): void {
    this.displayAdd = !this.displayAdd;
  }  

}
