import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "./posts.state";

export const selectFeature = (state: AppStateInterface) => state.posts;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading,
);

export const postsSelector = createSelector(
  selectFeature,
  (state) => state.posts,
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error,
);
