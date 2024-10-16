import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { RouterNavigatedAction } from "@ngrx/router-store";

@Component({
  selector: "app-navigate",
  standalone: true,
  imports: [],
  templateUrl: "./navigate.component.html",
  styleUrl: "./navigate.component.scss",
})
export class NavigateComponent {
  private store = inject(Store);
  private router = inject(Router);

  navigateToPosts() {
    // this.store.dispatch(new RouterNavigatedAction({ path: ["/posts"] }));
    this.router.navigate(["/posts"]);
  }
}
