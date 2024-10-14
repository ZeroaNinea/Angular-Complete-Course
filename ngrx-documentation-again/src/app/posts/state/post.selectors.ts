import { createFeatureSelector, createSelector } from "@ngrx/store";

import { PostState } from "./post.state";
import { selectAll, selectTotal } from "./post.reducer";

export const selectPostState = createFeatureSelector<PostState>("posts");

export const selectPosts = createSelector(selectPostState, selectAll);
