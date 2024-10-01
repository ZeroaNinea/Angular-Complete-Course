import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { mergeMap, exhaustMap, map, of, catchError } from "rxjs";

import { cartActions } from "./cart.action";
import { Cart } from "./cart.state";
import { CartService } from "./cart.service";

export const loadCart = createEffect(
  (actions$ = inject(Actions), cartService = inject(CartService)) => {
    return actions$.pipe(
      ofType(cartActions.loadCart),
      exhaustMap(() =>
        cartService.getCart().pipe(
          map((cart: Cart[]) => cartActions.cartSuccess({ cart: cart })),
          catchError((error) => of(cartActions.cartFailure({ error }))),
        ),
      ),
    );
  },
  { functional: true },
);
