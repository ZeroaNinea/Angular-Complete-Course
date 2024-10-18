import { Component, OnInit } from "@angular/core";
import { ProductService } from "./state/product.service";
import { Observable } from "rxjs";
import { Product } from "./state/models/product.model";

@Component({
  selector: "app-product",
  standalone: true,
  imports: [],
  templateUrl: "./product.component.html",
  styleUrl: "./product.component.scss",
})
export class ProductComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products$ = this.productService.entities$; // Automatically selects all products from the store.
  }

  addProduct(product: Product): void {
    this.productService.add(product); // Dispatches the add action.
  }

  deleteProduct(id: number): void {
    this.productService.delete(id); // Dispatches the delete action.
  }

  updateProduct(product: Product): void {
    this.productService.update(product); // Dispatches the update action.
  }
}
