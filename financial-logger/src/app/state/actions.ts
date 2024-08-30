import { createAction, createActionGroup, props } from "@ngrx/store";
import { Category } from "./Category";

export const addCategory = createAction(
  "[Category List] Add Category",
  props<{ category: Category }>(),
);

export const addAnotherCategory = createAction(
  "[Category List] Add Another Category",
  props<{ category: Category }>,
);

export const categoryActions = createActionGroup({
  source: "Category List",
  events: {
    "Add Category": props<{ category: Category }>(),
    "Add Another Category": props<{ category: Category }>(),
  },
});

// Homework //

// Delete Category
export const deleteCategory = createAction(
  "[Category List] Delete Category",
  props<{ category: Category }>(),
);

// Update Category

export const updateCategory = createAction(
  "[Category List] Update Category",
  props<{ category: Category }>(),
);

export const deletCategories = createActionGroup({
  source: "Category List",
  events: {
    "Add Category": props<{ category: Category }>(),
    "Delete Category": props<{ category: Category }>(),
    "Update Category": props<{ category: Category }>(),
  },
});
