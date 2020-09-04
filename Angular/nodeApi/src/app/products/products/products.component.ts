import { Component, OnInit } from '@angular/core';
import { ProductsServicesService } from "../services/products-services.service";
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
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
  form: FormGroup;

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
  //lors du click sur le <h2>ajouter un produit
  askAddForm() {
    //on récupère la liste de catégories
    this.categoriesServive.getAll().subscribe((data) => {
      this.categories = data;
      //on créé un tableau pour les checkbox
      this.createTableauPourCheckbox();
      //on créé le formulaire
      this.addForm = this.createForm();
    })
  }

  //le tableau pour faire le ngFor des checkboxes
  createTableauPourCheckbox() {
    if(this.categories) {
      this.categories.forEach(element => {
        this.arrayCategories.push({
          name: element.name,
        })
      });
    }
  }
  
  //création du formulaire
  createForm(): FormGroup {
    this.reduceAdd();
    return this.fb.group({
      name: [''],
      description: [''],
      price: Number,
      categories: this.fb.array([]) //on envoie un tableau pour les checkbox
    })
  }

  //les modifications de statut des checkbox
  saveModificationsCheckbox(e) {
    const categories: FormArray = this.addForm.get('categories') as FormArray;
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
  

  //le submit du formulaire
  addProduct() {
    const newProduct: Product = this.addForm.value;
    console.log(newProduct.categories)
    this.service.addProduct(newProduct).subscribe(() => this.getAllProducts());
    this.reduceAdd();
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
