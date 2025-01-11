describe('Testing Async Code with Spies', () => {
  let asyncFunctionSpy: jasmine.Spy;

  beforeEach(async () => {
    asyncFunctionSpy = jasmine.createSpy('asyncFunctionSpy');

    await Promise.resolve();
  });

  it('should be called asynchronously', async () => {
    const asyncFunction = async () => {
      asyncFunctionSpy();
    };

    expect(asyncFunctionSpy)
      .withContext('before called')
      .not.toHaveBeenCalled();

    await asyncFunction();

    expect(asyncFunctionSpy).withContext('after called').toHaveBeenCalled();
  });
});
