import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from "./products/products/products.component";
import { UpdateProductComponent } from "./products/update-product/update-product.component";

import { CategoriesComponent } from "./categories/categories/categories.component";
import { UpdateComponent } from "./categories/update/update.component";

const routes: Routes = [
  {path: "product", component: ProductsComponent},
  {path: "update-product/:id", component: UpdateProductComponent},
  {path: "categories", component: CategoriesComponent},
  {path: "update-categories/:id", component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
