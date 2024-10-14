import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { Post } from "./state/post.model";
import { selectPosts } from "./state/post.selectors";
import { loadPosts } from "./state/post.actions";

@Component({
  selector: "app-posts",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./posts.component.html",
  styleUrl: "./posts.component.scss",
})
export class PostsComponent {
  private store = inject(Store);

  posts$: Observable<Post[]> = this.store.select(selectPosts);

  constructor() {
    this.store.dispatch(loadPosts());
    this.posts$.subscribe(console.log); // Output: [] // Just empty arrray.
  }
}
