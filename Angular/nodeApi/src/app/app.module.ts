import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { ProductsComponent } from './products/products/products.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { UpdateComponent } from './categories/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UpdateProductComponent,
    CategoriesComponent,
    UpdateComponent
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
