export interface CounterState {
  count: number;
  isRunning: boolean;
}

export const initialState: CounterState = {
  count: 0,
  isRunning: false,
};
