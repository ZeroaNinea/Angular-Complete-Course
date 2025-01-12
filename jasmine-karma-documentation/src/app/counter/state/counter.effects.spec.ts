import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { Observable } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { CounterEffect } from './counter.effects';
import { startCounter, stopCounter, resetCounter } from './counter.actions';

describe('Counter Effects', () => {
  let actions$: Observable<any>;
  let effects: CounterEffect;

  beforeEach(() => {
    const initialState = {
      count: {
        count: 0,
        isRunning: false,
      },
    };

    TestBed.configureTestingModule({
      providers: [
        CounterEffect,
        provideMockActions(() => actions$),
        provideEffects(CounterEffect),
        provideStore(() => initialState),
      ],
    });

    effects = TestBed.inject(CounterEffect);
  });

  it('should dispatch startCounter repeatedly until stopCounter is dispatched', () => {
    actions$ = hot('a---b', { a: startCounter(), b: stopCounter() });

    console.log(actions$);

    const expected = cold('---a', { a: startCounter() });

    expect(effects.infiniteIncrement$).toBeObservable(expected);
  });
});
