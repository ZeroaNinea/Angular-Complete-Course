import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from "@ngrx/store";

// export const CategoriesActions = createActionGroup({
//   source: "Categories",
//   events: {
//     "Load Categories": emptyProps(),
//     "Load Categories Success": props<{ data: unknown }>(),
//     "Load Categories Failure": props<{ error: unknown }>(),
//   },
// });

export const categoryActions = createAction("[Category] Get Gategories");

let arrayNames = ["santosh", "kaushal"];

arrayNames.push("sravan");

arrayNames = [...arrayNames, "sravan"];
