import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./post.reducer";
import {
  selectAll,
  selectEntities,
  selectTotal,
  selectIds,
} from "./post.reducer";

// Feature selector for the 'posts' feature
export const selectPostsState = createFeatureSelector<PostsState>("posts");

export const selectPosts = createSelector(selectPostsState, selectAll);
