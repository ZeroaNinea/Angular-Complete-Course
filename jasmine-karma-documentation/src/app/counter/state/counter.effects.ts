import { Injectable, inject } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import {
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  takeUntil,
  // tap,
} from 'rxjs/operators';
import { interval } from 'rxjs';

import { resetCounter, startCounter, stopCounter } from './counter.actions';
import { CounterState } from './counter.state';
import { selectIsRunning } from './counter.selector';

@Injectable()
export class CounterEffect {
  private actions$ = inject(Actions);
  private store = inject(Store<{ count: CounterState }>);

  infiniteIncrement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startCounter),
      switchMap(() =>
        this.store.select(selectIsRunning).pipe(
          distinctUntilChanged(),
          filter((isRunning) => isRunning),
          switchMap(() =>
            interval(1000).pipe(
              map(() => startCounter()),
              // tap((action) => console.log('Emitted action:', action)),
              takeUntil(
                this.actions$.pipe(
                  ofType(stopCounter, resetCounter)
                  // tap((action) => console.log('Emitted action:', action))
                )
              )
            )
          )
        )
      )
    )
  );
}
