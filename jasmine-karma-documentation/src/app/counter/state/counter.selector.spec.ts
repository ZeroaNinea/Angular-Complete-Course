import { selectCount, selectIsRunning } from './counter.selector';
import { CounterState } from './counter.state';

describe('Counter Selectors', () => {
  const initialState: CounterState = {
    count: 0,
    isRunning: false,
  };

  it('should select the count', () => {
    const result = selectCount.projector(initialState);
    expect(result).toBe(0);
  });

  it('should select isRunning', () => {
    const result = selectIsRunning.projector(initialState);
    expect(result).toBe(false);
  });
});
