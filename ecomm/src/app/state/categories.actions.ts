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

export const categoryActions = createAction("[Category] Get Categories");

export const categoryActionsSuccess = createAction(
  "[Category] Get Categories Success",
  (categories: string[]) => ({ categories }),
);

export const categoryActionsFailure = createAction(
  "[Category] Get Categories Failure",
  (error: string) => ({ error }),
);

let arrayNames = ["santosh", "kaushal"];

arrayNames.push("sravan");

arrayNames = [...arrayNames, "sravan"];
