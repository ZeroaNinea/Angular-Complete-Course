import { createReducer, on } from "@ngrx/store";

import { PostsStateInterface, initialState } from "./posts.state";
import * as PostsActions from "./posts.actions";

export const postsReducer = createReducer(
  initialState,
  on(PostsActions.getPosts, (state) => ({ ...state, isLoading: true })),
  on(PostsActions.getPostsSuccess, (state, action) => {
    return { ...state, isLoading: false, posts: action.posts };
  }),
  on(PostsActions.getPostsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(PostsActions.createPostSuccess, (state, action) => {
    return { ...state, isLoading: false, posts: [...state.posts, action.post] };
  }),
);
