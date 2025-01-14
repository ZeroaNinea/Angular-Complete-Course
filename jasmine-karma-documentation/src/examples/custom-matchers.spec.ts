describe('custom-matchers', () => {
  beforeEach(() => {
    jasmine.addMatchers({
      toBeEven: () => {
        return {
          compare: (actual: number) => {
            const isEven = actual % 2 === 0;
            return {
              pass: isEven,
              message: `Expected ${actual} to be even`,
            };
          },
        };
      },

      toBeInRange: () => {
        return {
          compare: (actual: number, min: number, max: number) => {
            const pass = actual >= min && actual <= max;
            const message = pass
              ? `Expected ${actual} not to be in range ${min} to ${max}`
              : `Expected ${actual} to be in range ${min} to ${max}`;
            return { pass, message };
          },
        };
      },
    });
  });

  it('should confirm a number is even', () => {
    expect(4).toBeEven();
    expect(5).not.toBeEven();
  });

  it('should check if a number is in range', () => {
    expect(5).toBeInRange(1, 10);
    expect(15).not.toBeInRange(1, 10);
  });
});

/*
- Custom matchers in Jasmine like custom commands in Cypress.
*/
