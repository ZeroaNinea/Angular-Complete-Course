describe('Custom Object Formatters', () => {
  beforeEach(() => {
    jasmine.addCustomObjectFormatter((obj: unknown) => {
      if (obj instanceof MyCustomClass) {
        return `MyCustomClass{name: "${obj.name}", value: ${obj.value}}`;
      }
      return undefined;
    });
  });

  class MyCustomClass {
    constructor(public name: string, public value: number) {}
  }

  it('should display MyCustomClass in a readable format', () => {
    const customObject = new MyCustomClass('test', 42);

    expect(customObject).not.toEqual(new MyCustomClass('another', 24));
  });
});

/*
// Instead of showing raw object data, custom formatters define how Jasmine prints custom objects in human-readable form. The custom formatter is a function that takes an object as input and returns a formatted string representing the object. If the object is not of a type the formatter recognizes, it returns undefined.
// It returns the `MyCustomClass{name: "${obj.name}", value: ${obj.value}}` string in this case.
*/
