import { Injectable } from "@angular/core";
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

@Injectable()
export class CategoryEffects {
  constructor(
    private readonly categoryService: CategoryService,
    private actions$: Actions,
  ) {
    console.log(this.actions$);
  }

  // loadCategories$ = createEffect(() => this.actions$.pipe());
}
