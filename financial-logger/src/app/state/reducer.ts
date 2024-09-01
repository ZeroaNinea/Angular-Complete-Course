// import { Action } from "@ngrx/store";

// import { AppState } from "./state";

// export function reducer(state: AppState, action: Action) {
//   switch (action.type) {
//     case "[Category List] Add Category":
//       return { ...state, categories: [...state.categories, action.payload] };
//     default:
//       return state;
//   }
// }

// import { Action, createReducer, on } from "@ngrx/store";

// import * as actions from "./actions";
// import { AppState, initialState } from "./state";

// const _reducer = createReducer(
//   initialState,
//   on(actions.addCategory, (state, { category }) => ({
//     ...state,
//     categories: [...state.categories, category],
//   })),
//   on(actions.deleteCategory, (state, { name }) => ({
//     ...state,
//     categories: state.categories.filter((cat) => cat.name !== name),
//   })),
//   on(actions.deleteAllCategories, (state) => ({ ...state, categories: [] })),
// );

// export function reducer(state: AppState, action: Action) {
//   return _reducer(state, action);
// }

import { Action, createReducer, on } from "@ngrx/store";

import * as actions from "./actions";
import { AppState, initialState, Category } from "./state";

const _reducer = createReducer(
  initialState,
  on(actions.addCategory, (state, { category }) => ({
    ...state,
    categories: [...state.categories, category],
  })),
  on(actions.deleteCategory, (state, { name }) => ({
    ...state,
    categories: state.categories.filter((cat) => cat.name !== name),
  })),
  on(actions.deleteAllCategories, (state) => ({ ...state, categories: [] })),
);

export function reducer(state: AppState | undefined, action: Action): AppState {
  return _reducer(state, action);
}
