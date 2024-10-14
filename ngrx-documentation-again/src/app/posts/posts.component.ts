import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";
import { Dictionary } from "@ngrx/entity";

import { Observable } from "rxjs";

import { Post } from "./state/post.model";
import { selectPosts } from "./state/post.selectors";
import { loadPosts } from "./state/post.actions";
import { PostsService } from "./state/posts.service";

@Component({
  selector: "app-posts",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./posts.component.html",
  styleUrl: "./posts.component.scss",
})
export class PostsComponent implements OnInit {
  private store = inject(Store);

  // posts$!: Post[];
  posts$: Observable<Post[]> = this.store.select(selectPosts);

  constructor(/* private postsService: PostsService */) {
    this.store.dispatch(loadPosts());
    // this.store.select(selectPosts).subscribe((posts) => {
    //   console.log("Posts in store:", posts);
    // });
    // this.postsService.getPosts().subscribe((posts) => {
    //   console.log("Fetched posts from service directly:", posts);
    // });
    // this.posts$.subscribe(console.log); // Output: [] // Just empty arrray.
  }

  ngOnInit(): void {
    // this.postsService.getPosts().subscribe((data) => {
    //   this.posts$ = data;
    // });
  }
}
