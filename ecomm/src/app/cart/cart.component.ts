import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { Cart } from "./store/cart.state";
import { cartActions } from "./store/cart.action";
import { selectCart } from "./store/cart.selector";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./cart.component.html",
  styleUrl: "./cart.component.scss",
})
export class CartComponent implements OnInit {
  cart$!: Observable<Cart[]>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(cartActions.loadCart());

    this.cart$ = this.store.select(selectCart);
  }
}
