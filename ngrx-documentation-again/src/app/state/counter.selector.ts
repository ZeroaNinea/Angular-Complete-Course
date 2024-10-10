import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

export const selectCounterState = createFeatureSelector<CounterState>("count");

export const selectCount = createSelector(
  selectCounterState,
  (state: CounterState) => state.count,
);
