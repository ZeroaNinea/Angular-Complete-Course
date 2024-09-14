import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { mergeMap, exhaustMap } from "rxjs";

import { Product, productActions } from "./product.action";
import { ProductService } from "./product.service";

export const loadProducts = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.loadProduct),
      exhaustMap((action) =>
        productService.getProductByCategory("jewelery").pipe(
          map((products) => productActions.productSuccess({ products })),
          catchError(() => of(productActions.productFailure("Error Occured"))),
        ),
      ),
    );
  },
  { functional: true },
);
