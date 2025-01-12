import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import { CounterState } from './state/counter.state';
import { selectCount } from './state/counter.selector';
import {
  resetCounter,
  startCounter,
  stopCounter,
} from './state/counter.actions';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-counter',
  imports: [AsyncPipe, MatButtonModule, MatCardModule],
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  count$!: Observable<number>;

  constructor(private store: Store<{ count: CounterState }>) {
    this.count$ = this.store.select(selectCount);
  }

  startCounter(): void {
    this.store.dispatch(startCounter());
  }

  stopCounter(): void {
    this.store.dispatch(stopCounter());
  }

  resetCounter(): void {
    this.store.dispatch(resetCounter());
  }
}
