import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostsService } from "./posts.service";
import {
  loadPosts,
  loadPostsSuccess,
  loadPostsFailure,
  createPost,
  createPostSuccess,
} from "./posts.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class PostsEffects {
  private actions$ = inject(Actions);
  private postsService = inject(PostsService);

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      mergeMap(() =>
        this.postsService.getPosts().pipe(
          map((posts) => loadPostsSuccess({ posts })),
          catchError((error) => of(loadPostsFailure({ error }))),
        ),
      ),
    ),
  );

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPost),
      mergeMap((action) =>
        this.postsService.createPost(action.post).pipe(
          map((post) => createPostSuccess({ post })),
          catchError((error) => of(loadPostsFailure({ error }))),
        ),
      ),
    ),
  );
}
