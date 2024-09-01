import { AppState } from "./state";
import { createSelector } from "@ngrx/store";

export const selectCategories = (state: { categories: AppState }) =>
  state.categories;

export const getCategories = createSelector(
  selectCategories,
  (state: AppState) => state.categories,
);
