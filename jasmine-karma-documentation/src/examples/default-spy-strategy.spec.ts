describe('Default Spy Strategy', () => {
  beforeEach(() => {
    jasmine.setDefaultSpyStrategy((and) => and.returnValue('Hello, World!')); // Rewrite the default spy strategy.
  });

  it('returns the value Hello Wolrd', () => {
    const spy = jasmine.createSpy();

    expect(spy()).toEqual('Hello, World!');
  });

  it('throws if you call any methods', () => {
    jasmine.setDefaultSpyStrategy((and) =>
      and.throwError(new Error('Do Not Call Me'))
    ); // Rewrite the value again.
    const program = jasmine.createSpyObj(['start', 'stop', 'examine']);
    jasmine.setDefaultSpyStrategy();

    expect(() => {
      program.start();
    }).toThrowError('Do Not Call Me');
  });
});
