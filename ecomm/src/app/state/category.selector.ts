import {
  createFeatureSelector,
  createSelector,
  createFeature,
} from "@ngrx/store";

import { CategoryState } from "./state";

import { categoryReducer } from "./categories.reducer";

// export const selectCategoryState = (state: CategoryState) => state;

const categoryFeatureKey = "category";

export const selectCategoryState =
  createFeatureSelector<CategoryState>(categoryFeatureKey);

export const selectCategories = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.categories,
);

export const selectError = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.error,
);

export const categoryFeature = createFeature({
  name: categoryFeatureKey,
  reducer: categoryReducer,
});
