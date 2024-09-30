import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { mergeMap, exhaustMap } from "rxjs";

import { productActions } from "./product.action";
import { Product } from "./product.state";
import { ProductService } from "./product.service";

import { map, of, catchError } from "rxjs";

export const loadProductsByCategory = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.loadProductsByCategory),
      exhaustMap((action) =>
        productService.getProductByCategory(action.category).pipe(
          map((products) => productActions.productSuccess({ products })),
          // catchError(() => of(productActions.productFailure("Error Occured"))),
          catchError((error) => of(productActions.productFailure({ error }))),
        ),
      ),
    );
  },
  { functional: true },
);

export const loadProducts = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.loadProduct),
      exhaustMap(() =>
        productService.getProducts().pipe(
          map((products) => productActions.productSuccess({ products })),
          // catchError(() =>
          //   of(productActions.productFailure({ error: "Error Occured" })),
          // ),
          catchError((error) =>
            // of(productActions.productFailure({ error: "Error Occured" })),
            of(productActions.productFailure({ error })),
          ),
        ),
      ),
    );
  },
  { functional: true },
);

// export const loadProducts = createEffect(
//   (actions$ = inject(Actions), productService = inject(ProductService)) => {
//     return actions$.pipe(
//       ofType(productActions.loadProduct),
//       exhaustMap((action) =>
//         productService.getProductByCategory("jewelery").pipe(
//           map((products) => productActions.productSuccess({ products })),
//           // catchError(() => of(productActions.productFailure("Error Occured"))),
//           catchError(() =>
//             of(productActions.productFailure({ error: "Error Occured" })),
//           ),
//         ),
//       ),
//     );
//   },
//   { functional: true },
// );
