import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

export const selectCounterState = createFeatureSelector<CounterState>('count');
export const selectIsRunningState =
  createFeatureSelector<CounterState>('isRunning');

export const selectCount = createSelector(
  selectCounterState,
  (state: CounterState) => state.count
);

export const selectIsRunning = createSelector(
  selectIsRunningState,
  (state: CounterState) => state.isRunning
);
