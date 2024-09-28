import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Product } from "./product.state";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductByCategory(category: string) {
    return this.http.get<Product[]>(
      `https://fakestoreapi.com/products/category/${category}`,
    );
  }
}
