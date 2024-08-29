import { createAction, props } from "@ngrx/store";
import { Category } from "./state";

export const addCategory = createAction(
  "[Category List] Add Category",
  props<{ category: Category }>(),
);
