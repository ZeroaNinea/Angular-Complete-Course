import { Component, inject, signal } from "@angular/core";
import { CommonModule, AsyncPipe } from "@angular/common";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { increment, decrement, reset } from "../state/counter.actions";
import { CounterState } from "../state/counter.state";
import { selectCount } from "../state/counter.selector";

@Component({
  selector: "app-my-counter",
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: "./my-counter.component.html",
  styleUrl: "./my-counter.component.scss",
})
export class MyCounterComponent {
  // count$!: Observable<CounterState>;
  count$: Observable<number>;

  constructor(private store: Store<{ count: CounterState }>) {
    // this.count$ = store.select("count");
    this.count$ = this.store.select(selectCount);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
