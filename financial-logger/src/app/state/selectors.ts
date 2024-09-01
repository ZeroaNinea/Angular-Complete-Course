import { AppState } from "./state";

export const categories = (state: { categories: AppState }) =>
  state.categories.categories;
