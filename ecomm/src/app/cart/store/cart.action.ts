import { createActionGroup, props, emptyProps } from "@ngrx/store";

import { Cart } from "./cart.state";

export const cartActions = createActionGroup({
  source: "Cart",
  events: {
    loadCart: emptyProps(),
    cartSuccess: props<{ cart: Cart[] }>(),
    cartFailure: props<{ error: string }>(),
  },
});
