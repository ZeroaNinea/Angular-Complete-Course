import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { of } from "rxjs";
import { delay, map } from "rxjs/operators";

import { increment } from "./counter.actions";

@Injectable()
export class CounterEffects {
  private actions$ = inject(Actions);

  // constructor(private actions$: Actions) {}

  delayedIncrement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increment),
      delay(1000),
      map(() => increment()),
    ),
  );
}
