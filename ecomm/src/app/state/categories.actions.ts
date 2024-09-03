import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const CategoriesActions = createActionGroup({
  source: "Categories",
  events: {
    "Load Categories": emptyProps(),
    "Load Categories Success": props<{ data: unknown }>(),
    "Load Categories Failure": props<{ error: unknown }>(),
  },
});
