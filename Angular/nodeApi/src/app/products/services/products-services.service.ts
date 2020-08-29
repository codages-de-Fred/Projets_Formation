import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../products";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsServicesService {

  private url : string = "http://localhost:4000/product"

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getOneProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  addProduct(product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

  update(product: object, id: string): Observable<object> {
    return this.http.put<object>(`${this.url}/${id}`, product);
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
