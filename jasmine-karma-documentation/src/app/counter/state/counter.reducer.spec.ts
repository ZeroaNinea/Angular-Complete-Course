import { counterReducer } from './counter.reducer';
import { startCounter, stopCounter, resetCounter } from './counter.actions';
import { initialState } from './counter.state';

describe('Counter Reducer', () => {
  it('should handle startCounter action', () => {
    const state = counterReducer(initialState, startCounter());
    expect(state.count).toBe(initialState.count + 1);
    expect(state.isRunning).toBe(true);
  });

  it('should handle stopCounter action', () => {
    const state = counterReducer(initialState, stopCounter());
    expect(state.isRunning).toBe(false);
  });

  it('should handle resetCounter action', () => {
    const state = counterReducer(
      { count: 10, isRunning: true },
      resetCounter()
    );
    expect(state.count).toBe(0);
    expect(state.isRunning).toBe(false);
  });
});
