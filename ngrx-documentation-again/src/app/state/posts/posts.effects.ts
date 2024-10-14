import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { catchError, map, mergeMap, of } from "rxjs";

import { PostsService } from "./posts.service";
import * as PostsActions from "./posts.actions";

@Injectable()
export class PostsEffects {
  private actions$ = inject(Actions);

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.getPosts),
      mergeMap(() => {
        return this.postsService.getPosts().pipe(
          map((posts) => PostsActions.getPostsSuccess({ posts })),
          catchError((error) =>
            of(PostsActions.getPostsFailure({ error: error.message })),
          ),
        );
      }),
    ),
  );

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.createPost),
      mergeMap(({ post }) => {
        return this.postsService.createPost(post).pipe(
          map((post) => PostsActions.createPostSuccess({ post })),
          catchError((error) =>
            of(PostsActions.createPostFailure({ error: error.message })),
          ),
        );
      }),
    ),
  );

  constructor(
    // private actions$: Actions,
    private postsService: PostsService,
  ) {}
}
