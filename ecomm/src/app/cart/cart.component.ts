import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { Cart } from "./store/cart.state";
import { cartActions } from "./store/cart.action";
import { selectCart, userCartSelector } from "./store/cart.selector";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./cart.component.html",
  styleUrl: "./cart.component.scss",
})
export class CartComponent implements OnInit {
  // cart$!: Observable<Cart[]>;
  cart$!: any;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    // this.store.dispatch(cartActions.loadCart());
    // this.store.dispatch(cartActions.loadCartById({ id: 3 }));

    // this.cart$ = this.store.select(selectCart);
    this.cart$ = this.store.select(userCartSelector);
    // console.log(this.cart$);
    // console.log(this.cart$.subscribe());
  }
}
