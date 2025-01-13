import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ClientEffects } from './client.effects';
import { loadClients, networkRequest } from './client.actions';
import { cold, getTestScheduler, hot } from 'jasmine-marbles';

describe('ClientEffects', () => {
  let actions$!: Observable<any>;
  let effects: ClientEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject<ClientEffects>(ClientEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('dispatch networkRequest', () => {
    const scheduler = getTestScheduler();

    scheduler.run(() => {
      const actions = '-a';
      const expected = '-----------a';

      actions$ = hot(actions, { a: loadClients() });

      // effects.loadClients$.subscribe((data) => console.log(data));

      expect(effects.loadClients$).toBeObservable(
        cold(expected, { a: networkRequest() })
      );
    });
  });
});

/*
### `jasmine-marbles`
- `hot`: Call actions.
- `cold`: Mock data for action calls.
*/
