import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.state";
import { incrementCounter } from "../store/counter.action";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  constructor(private store: Store<AppState>) {}

  onIncrr() {
    this.store.dispatch(incrementCounter());
  }
}
