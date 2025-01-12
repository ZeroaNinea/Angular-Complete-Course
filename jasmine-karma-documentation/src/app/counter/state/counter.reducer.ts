import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import { resetCounter, startCounter, stopCounter } from './counter.actions';

export const counterReducer = createReducer(
  initialState,
  on(startCounter, (state) => ({
    ...state,
    count: state.count + 1,
    isRunning: true,
  })),
  on(stopCounter, (state) => ({
    ...state,
    isRunning: false,
  })),
  on(resetCounter, (state) => ({
    ...state,
    count: initialState.count,
    isRunning: false,
  }))
);
