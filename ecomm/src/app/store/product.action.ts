import { createAction, createActionGroup } from "@ngrx/store";

import { Product } from "./.product.state";

export const productActions = createActionGroup({
  source: "Product",
  events: {
    "Load Product": props<{ name: string }>(),
    "Product Success": props<{ products: Product[] }>(),
    "Product Failure": props<{ error: string }>(),
  },
});
