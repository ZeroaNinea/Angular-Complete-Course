import { Injectable, inject } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, exhaustMap, catchError } from "rxjs/operators";

import {
  categoryActions,
  categoryActionsFailure,
  categoryActionsSuccess,
} from "./categories.actions";
import { CategoryService } from "./category.service";

import { Observable, Subject } from "rxjs";

// interface Action {
//   type: string;
// }

// interface Actions {
//   type: Action<string>;
// }

@Injectable()
export class CategoryEffects {
  constructor(
    private readonly categoryService: CategoryService,
    private actions$: Actions,
  ) {
    console.log(this.actions$);
    this.actions$.subscribe(console.log);
  }

  // loadCategories$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(categoryActions),
  //     exhaustMap(() =>
  //       this.categoryService.getCategories().pipe(
  //         map((categories) => categoryActionsSuccess({ categories })),
  //         catchError((error) => EMPTY),
  //       ),
  //     ),
  //   ),
  // );

  // loadCategories$ = createEffect(() => this.actions$.pipe()); // I've already checked everything. The error occurs because of this line.
}
