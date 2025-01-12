import { Injectable, inject } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { delay, filter, map, switchMap, takeUntil } from 'rxjs/operators';

import { resetCounter, startCounter, stopCounter } from './counter.actions';
import { CounterState } from './counter.state';
import { of } from 'rxjs';

@Injectable()
export class CounterEffect {
  private actions$ = inject(Actions);
  private store = inject(Store<{ count: CounterState }>);

  infiniteIncrement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startCounter),
      switchMap(() =>
        this.store
          .select((state) => state.count.isRunning)
          .pipe(
            filter((isRunning) => isRunning),
            switchMap(() =>
              of(null).pipe(
                delay(1000),
                map(() => startCounter()),
                takeUntil(this.actions$.pipe(ofType(stopCounter, resetCounter)))
              )
            )
          )
      )
    )
  );
}
