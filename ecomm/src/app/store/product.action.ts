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
    "Load Product": emptyProps(),
    "Product Success": props<{ products: Product[] }>(),
    "Product Failure": props<{ error: string }>(),
  },
});
