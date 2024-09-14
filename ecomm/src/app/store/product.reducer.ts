import { createReducer, on } from "@ngrx/store";

import { Product, ProductState } from "./product.state";
import { productActions } from "./product.action";
import { initialState } from "./product.state";

export const productReducer = createReducer(
  initialState,
  on(productActions.productSuccess, (state, action) => ({
    ...state,
    products: action.products,
    productCount: action.products.length,
    error: "",
  })),
  on(productActions.productFailure, (state, action) => ({
    ...state,
    products: [],
    productCount: 0,
    error: action.error,
  })),
);
