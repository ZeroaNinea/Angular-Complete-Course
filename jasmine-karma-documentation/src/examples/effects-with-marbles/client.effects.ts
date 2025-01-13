import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { debounceTime, map, Observable } from 'rxjs';
import { loadClients, networkRequest } from './client.actions';

@Injectable()
export class ClientEffects {
  private actions$ = inject(Actions);

  public loadClients$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadClients),
      debounceTime(10),
      map(() => networkRequest())
    );
  });
}
