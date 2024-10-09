import { createReducer, on, createFeature, createSelector } from "@ngrx/store";
import { userActions } from "./user.action";

export interface User {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
}

export interface Address {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface Geolocation {
  lat: string;
  long: string;
}

export interface Name {
  firstname: string;
  lastname: string;
}

export interface UserState {
  user: User | undefined;
  error: string;
}

const initialState: UserState = {
  user: undefined,
  error: "",
};

export const userReducer = createReducer(
  initialState,
  on(userActions.loadUserProfileSuccess, (state, action) => ({
    ...state,
    user: action.user,
    error: "",
  })),
  on(userActions.loadUserProfileFailure, (state, action) => ({
    ...state,
    user: undefined,
    error: action.error,
  })),
);

export const userFeature = createFeature({
  name: "user",
  reducer: userReducer,
  extraSelectors: ({ selectUser, selectError }) => ({
    selectUser,
    selectError,
  }),
});
