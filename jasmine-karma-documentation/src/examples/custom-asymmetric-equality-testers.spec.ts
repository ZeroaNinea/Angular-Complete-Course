describe('custom asymmetric equality testers', () => {
  const isOddNumber = {
    asymmetricMatch(actual: number) {
      return actual % 2 !== 0;
    },
    toString() {
      return '<isOddNumber>';
    },
  };

  it('should check if a number is odd', () => {
    expect(3).toEqual(isOddNumber); // Custom asymmetric equality testers are passed to the `toEqual` method and return true all false.
    expect(4).not.toEqual(isOddNumber);
  });

  it('should display custom string representation', () => {
    const testNumber = 5;
    expect(() => {
      expect(testNumber).toEqual(isOddNumber);
    }).not.toThrow(); // This uses the toString for a meaningful error message if it fails.
  });
});
