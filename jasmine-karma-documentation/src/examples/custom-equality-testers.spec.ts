import { CustomEqualityTester } from './types/custom-equality-testers.interface';

const customEqualityTester = (
  first: string | CustomEqualityTester,
  second: string | CustomEqualityTester
): boolean => {
  if (
    typeof first === 'string' ||
    (typeof first === 'object' && typeof second === 'string') ||
    typeof second === 'object'
  ) {
    return first[0] === second[1];
  } else {
    throw Error(
      "You've specified the types incorrectly, girl. You're too silly!\n:p"
    );
  }
};

describe('Custom Equality Testers', () => {
  beforeEach(() => {
    jasmine.addCustomEqualityTester(customEqualityTester);
  });

  it('is equal using a custom tester', () => {
    expect('abc').toEqual(' a ');
  });

  it('is not equal using a custom tester', () => {
    expect('abc').not.toEqual('abc');
  });

  it('works even in nested equality tests', function () {
    expect(['abc', '123']).not.toEqual([' a ', ' 1 ']);
  });
});
