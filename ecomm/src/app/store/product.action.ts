import {
  createAction,
  createActionGroup,
  props,
  emptyProps,
} from "@ngrx/store";

import { Product } from "./product.state";

export const productActions = createActionGroup({
  source: "Product",
  events: {
    loadProduct: emptyProps(),
    loadProductsByCategory: props<{ category: string }>(),
    productSuccess: props<{ products: Product[] }>(),
    productFailure: props<{ error: string }>(),
  },
});
