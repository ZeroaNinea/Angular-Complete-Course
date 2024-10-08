import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from "@ngrx/store";
import { User } from "./user.state";

export const userActions = createActionGroup({
  source: "User",
  events: {
    loadUserProfile: props<{ id: number }>(),
    loadUserProfileSuccess: props<{ user: User }>(),
    loadUserProfileFailure: props<{ error: string }>(),
  },
});
