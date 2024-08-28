import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AppState } from "./store/app.state";
import { selectCount, selectCounterState } from "./store/counter.selector";
import { incrementCounter, decrementCounter } from "./store/counter.action";

import { UserComponent } from "./user/user.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  counter$: Observable<number> = new Observable<number>();

  constructor(private store: Store<AppState>) {
    this.counter$ = store.select(selectCount);
  }

  onIncrement() {
    this.store.dispatch(incrementCounter());
  }

  onDecrement() {
    this.store.dispatch(decrementCounter());
  }
}
