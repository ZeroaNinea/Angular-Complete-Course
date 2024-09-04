import { createReducer, on } from "@ngrx/store";
import {
  categoryActions,
  categoryActionsFailure,
  categoryActionsSuccess,
} from "./categories.actions";
import { initialState } from "./state";

// export const categoriesReducer = createReducer(
//   initialCategoriesState,
//   on(CategoriesActions.loadCategories, (state) => ({
//     ...state,
//     data: ["Catgirl", "Puppygirl"],
//     loading: true,
//     error: null,
//   })),
//   on(CategoriesActions.loadCategoriesSuccess, (state, { data }) => ({
//     ...state,
//     loading: false,
//     data: ["Foxgirl"],
//   })),
//   on(CategoriesActions.loadCategoriesFailure, (state, { error }) => ({
//     ...state,
//     loading: false,
//     error: null,
//     data: ["bunnygirl"],
//   })),
// );

export const categoryReducer = createReducer(
  initialState,
  on(categoryActionsSuccess, (state, action) => {
    return {
      ...state,
      categories: action.categories,
      error: "",
    };
  }),
  on(categoryActionsFailure, (state, action) => {
    return {
      ...state,
      categories: [],
      error: action.error,
    };
  }),
);
