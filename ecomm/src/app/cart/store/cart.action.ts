import { createActionGroup, props, emptyProps } from "@ngrx/store";

import { Cart } from "./cart.state";

export const cartActions = createActionGroup({
  source: "Cart",
  events: {
    loadCart: emptyProps(),
    loadCartById: props<{ id: number }>(),
    cartSuccess: props<{ cart: Cart[] }>(),
    cartFailure: props<{ error: string }>(),
  },
});
