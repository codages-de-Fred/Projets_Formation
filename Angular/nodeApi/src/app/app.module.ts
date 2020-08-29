import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { ProductsComponent } from './products/products/products.component';
import { UpdateProductsComponent } from './products/update-products/update-products.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { UpdateCategoriesComponent } from './categories/update-categories/update-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UpdateProductsComponent,
    CategoriesComponent,
    UpdateCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
