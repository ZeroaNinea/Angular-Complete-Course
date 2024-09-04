import { createFeatureSelector } from "@ngrx/store";

import { CategoryState } from "./state";

export const selectCategoryState = (state: CategoryState) => state;

export const selectCategories = (state: CategoryState) => state.categories;

export const selectError = (state: CategoryState) => state.error;
