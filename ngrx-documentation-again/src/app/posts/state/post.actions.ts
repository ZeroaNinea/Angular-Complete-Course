import { createAction, props } from "@ngrx/store";
import { Post } from "./post.model";

export const loadPosts = createAction("[Post/API] Load Posts");
export const loadPostsSuccess = createAction(
  "[Post/API] Load Posts Success",
  props<{ posts: Post[] }>(),
);

export const loadPostsFailure = createAction(
  "[Posts] Load Posts Failure",
  props<{ error: any }>(),
);

export const createPost = createAction(
  "[Posts] Create Post",
  props<{ post: { title: string; body: string } }>(),
);
export const createPostSuccess = createAction(
  "[Posts] Create Post Success",
  props<{ post: Post }>(),
);
