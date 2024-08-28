import { CounterState } from "./counter.reducer";

export interface AppState {
  counter: CounterState;
  loggeedUserData: any;
  cityLost: any[];
}
