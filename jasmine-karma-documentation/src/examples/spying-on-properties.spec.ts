class Counter {
  private _value: number = 0;

  get value() {
    return this._value;
  }

  set value(val: number) {
    this._value = val;
  }
}

describe('Spying on Properties', () => {
  it('should spy on the value getter', () => {
    const counter = new Counter();
    const spy = spyOnProperty(counter, 'value', 'get').and.returnValue(42); // Creates a spy on the value property getter.

    expect(counter.value).toBe(42); // Overrides the original getter behavior.
    expect(spy).toHaveBeenCalled(); // The spy verifies that the getter was called.
  });

  it('should spy on the value setter', () => {
    const counter = new Counter();
    const spy = spyOnProperty(counter, 'value', 'set'); // Creates a spy on the setter for `value`.

    counter.value = 10; // Triggers the setter.
    expect(spy).toHaveBeenCalledWith(10); // Verify tha the setter was called with 10.
  });
});

/*
### `spyOnProperty(obj, propertyName, accessType)`: Creates spies on object properties.
- `obj`: The object containing the property.
- `propertyName`: The name of the property you want to on.
- `accessType`: Either `'get'` for spying on the getter or `'set'` for spying on the setter.
*/
