import { startCounter, stopCounter, resetCounter } from './counter.actions';

describe('Counter Actions', () => {
  it('should create a startCounter action', () => {
    const action = startCounter();
    expect(action.type).toBe('[Counter] Start');
  });

  it('should create a stopCounter action', () => {
    const action = stopCounter();
    expect(action.type).toBe('[Counter] Stop');
  });

  it('should create a resetCounter action', () => {
    const action = resetCounter();
    expect(action.type).toBe('[Counter] Reset');
  });
});
