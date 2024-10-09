import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { increment, decrement, reset } from "../state/counter.actions";

@Component({
  selector: "app-my-counter",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./my-counter.component.html",
  styleUrl: "./my-counter.component.scss",
})
export class MyCounterComponent {
  count$!: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select("count");
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
