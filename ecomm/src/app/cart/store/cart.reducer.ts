import { createReducer, on } from "@ngrx/store";

import { Cart, initialState } from "./cart.state";
import { cartActions } from "./cart.action";

export const cartReducer = createReducer(
  initialState,
  on(cartActions.cartSuccess, (state, action) => ({
    ...state,
    cart: action.cart,
    error: "",
  })),
  on(cartActions.cartFailure, (state, action) => ({
    ...state,
    cart: [],
    error: action.error,
  })),
);
