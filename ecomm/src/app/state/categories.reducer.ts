import { createReducer, on } from "@ngrx/store";
import { CategoriesActions } from "./categories.actions";
import { initialCategoriesState } from "./state";

export const categoriesReducer = createReducer(
  initialCategoriesState,
  on(CategoriesActions.loadCategories, (state) => ({
    ...state,
    data: ["Catgirl", "Puppygirl"],
    loading: true,
    error: null,
  })),
  on(CategoriesActions.loadCategoriesSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    data: ["Foxgirl"],
  })),
  on(CategoriesActions.loadCategoriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: null,
    data: ["bunnygirl"],
  })),
);
