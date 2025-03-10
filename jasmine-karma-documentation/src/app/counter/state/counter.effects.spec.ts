import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { hot, cold, getTestScheduler } from 'jasmine-marbles';

import { CounterEffect } from './counter.effects';
import { startCounter, stopCounter } from './counter.actions';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectIsRunning } from './counter.selector';
import { CounterState, initialState } from './counter.state';

describe('Counter Effects', () => {
  let actions$!: Observable<{
    a: () => void;
    b: () => void;
  }>;
  let effects: CounterEffect;
  let store: MockStore<{ count: CounterState }>;

  beforeEach(() => {
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

    TestBed.configureTestingModule({
      providers: [
        CounterEffect,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState,
          selectors: [{ selector: selectIsRunning, value: false }],
        }),
      ],
    });

    effects = TestBed.inject(CounterEffect);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should dispatch startCounter while running and stop on stopCounter then again dispatch startConter', () => {
    getTestScheduler().run(() => {
      actions$ = hot('a 2005ms b 4ms a 2005ms b', {
        a: startCounter(),
        b: stopCounter(),
      });

      store.overrideSelector(selectIsRunning, true);

      const expected = cold('1000ms a 999ms a 1010ms a 999ms a', {
        a: startCounter(),
      });

      expect(effects.infiniteIncrement$).toBeObservable(expected);
    });
  });
});
