import { Component, inject, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { selectPostId, selectUrl } from "./state/router/router.selectors";

import { MyCounterComponent } from "./my-counter/my-counter.component";
import { PostsComponent } from "./posts/posts.component";
import { NavigateComponent } from "./navigate/navigate.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    MyCounterComponent,
    PostsComponent,
    NavigateComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "ngrx-documentation-again";

  private store = inject(Store);

  postId$!: Observable<string>;
  currentUrl$!: Observable<string>;

  constructor() {}

  ngOnInit() {
    this.postId$ = this.store.select(selectPostId); // Getting the post ID from the route params.
    this.currentUrl$ = this.store.select(selectUrl); // Getting the current URL.
  }
}
