import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from "./products/products/products.component";
import { UpdateProductsComponent } from "./products/update-products/update-products.component";

import { CategoriesComponent } from "./categories/categories/categories.component";
import { UpdateCategoriesComponent } from "./categories/update-categories/update-categories.component";

const routes: Routes = [
  {path: "product", component: ProductsComponent},
  {path: "update-product/:id", component: UpdateProductsComponent},
  {path: "categories", component: CategoriesComponent},
  {path: "update-categories/:id", component: UpdateCategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
