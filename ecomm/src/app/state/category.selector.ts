import { createFeatureSelector, createSelector } from "@ngrx/store";

import { CategoryState } from "./state";

export const selectCategoryState = (state: CategoryState) => state;

export const selectCategories = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.categories,
);

export const selectError = (state: CategoryState) => state.error;
