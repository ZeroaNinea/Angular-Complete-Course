import { createAction, props } from "@ngrx/store";
// import { Category } from "./state";

interface Category {
  name: string;
}

export const addCategory = createAction(
  "[Category List] Add Category",
  props<{ category: Category }>(),
);
