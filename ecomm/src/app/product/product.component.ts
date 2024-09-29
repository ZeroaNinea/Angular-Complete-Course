import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Store } from "@ngrx/store";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

import { Observable } from "rxjs";

import { productActions } from "../store/product.action";
import {
  selectProducts,
  selectProductsByCategory,
} from "../store/product.selector";
import { Product } from "../store/product.state";

@Component({
  selector: "app-product",
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: "./product.component.html",
  styleUrl: "./product.component.scss",
})
export default class ProductComponent implements OnInit, OnChanges {
  @Input() categoryName: string = "";
  @Input() animation: any;

  products$!: Observable<Product[]>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(productActions.loadProduct());
    // console.log(this.categoryName);
    // this.products$ = this.categoryName
    //   ? this.store.select(selectProductsByCategory(this.categoryName))
    //   : this.store.select(selectProducts);
  }

  ngOnChanges(): void {
    this.products$ = this.categoryName
      ? this.store.select(selectProductsByCategory(this.categoryName))
      : this.store.select(selectProducts);
  }
}
