import { Foo, Tape } from './types/your-first-suite.interface';

describe('Your First Suite', function () {
  let a: boolean;
  let value: number = 0;

  let foo: Foo;
  let bar: number | null;

  let whatAmI: jasmine.Spy;

  let tape: jasmine.SpyObj<Tape>;

  const soon = () => {
    return new Promise<void>(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 1);
    });
  };

  beforeAll(async () => {
    await soon();
    value++;
    expect(value).toBeGreaterThan(0);
  });

  beforeEach(() => {
    // foo = {
    //   setBar: (value: number) => {
    //     bar = value;
    //   },
    // };

    foo = {
      setBar: jasmine.createSpy('setBar').and.callFake((value: number) => {
        bar = value;
      }),
    };

    // spyOn(foo, 'setBar'); // Spy the function. I can't use it hear because I'm using TypeScript.

    foo.setBar(123);
    foo.setBar(456, 'another param');

    whatAmI = jasmine.createSpy('whatAmI');
    whatAmI('I', 'am', 'a', 'spy');

    tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);

    tape.play();
    tape.pause();
    tape.rewind(0);
  });

  it('true equals true', () => {
    expect(true).toBe(true);
  });

  it("false dosen't equal true", () => {
    expect(false).not.toBe(true);
  });

  it('a equals true', () => {
    a = true;

    expect(a).toBe(true);
  });

  // Spy implementation.
  it('tracks that the spy was called', () => {
    expect(foo.setBar).toHaveBeenCalled();
  });

  it('tracks that the spy was called 2 times', () => {
    expect(foo.setBar).toHaveBeenCalledTimes(2);
  });

  it('tracks all the arguments of its calls', () => {
    expect(foo.setBar).toHaveBeenCalledWith(123);
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
  });

  it('tracks if it was called at all', () => {
    foo.setBar();

    expect(foo.setBar.calls.any()).toEqual(true);
  });

  it('tracks that the whatAmI spy was called', () => {
    expect(whatAmI).toHaveBeenCalled();
  });

  it('creates spies for each requested function', () => {
    expect(tape.play).toBeDefined();
    expect(tape.pause).toBeDefined();
    expect(tape.stop).toBeDefined();
    expect(tape.rewind).toBeDefined();
  });

  it('matches any value', () => {
    expect({}).toEqual(jasmine.any(Object));
    expect(12).toEqual(jasmine.any(Number));
  });

  describe('when used with a spy', () => {
    it('is useful for comparing arguments', () => {
      const foo = jasmine.createSpy('foo');
      foo(12, () => {
        return true;
      });

      expect(foo).toHaveBeenCalledWith(
        jasmine.any(Number),
        jasmine.any(Function)
      );
    });
  });

  describe('jasmine.anything', () => {
    it('matches anything', () => {
      expect(1).toEqual(jasmine.anything());
    });

    describe('when used with a spy', () => {
      // `jasmine.anything` returns true if the actual value is not `null` or `undefined`.
      it('is useful when the argument can be ignored', () => {
        const foo = jasmine.createSpy('foo');
        foo(12, () => {
          return false;
        });

        expect(foo).toHaveBeenCalledWith(12, jasmine.anything());
      });
    });
  });

  describe('jasmine.objectContaining', function () {
    let foo: {
      a: number;
      b: number;
      bar: string;
    };

    beforeEach(function () {
      foo = {
        a: 1,
        b: 2,
        bar: 'baz',
      };
    });

    it('matches objects with the expect key/value pairs', function () {
      expect(foo).toEqual(
        jasmine.objectContaining({
          // Check if the object contains the value.
          bar: 'baz',
        })
      );
      expect(foo).not.toEqual(
        jasmine.objectContaining({
          c: 37,
        })
      );
    });

    describe('when used with a spy', function () {
      it('is useful for comparing arguments', function () {
        const callback = jasmine.createSpy('callback');

        callback({
          bar: 'baz',
        });

        expect(callback).toHaveBeenCalledWith(
          jasmine.objectContaining({ bar: 'baz' })
        );
      });
    });
  });

  describe('jasmine.arrayContaining', function () {
    let foo: number[];

    beforeEach(function () {
      foo = [1, 2, 3, 4];
    });

    it('matches arrays with some of the values', function () {
      expect(foo).toEqual(jasmine.arrayContaining([3, 1])); // Check if the array contains the value.
      expect(foo).not.toEqual(jasmine.arrayContaining([6]));
    });

    describe('when used with a spy', function () {
      it('is useful when comparing arguments', function () {
        const callback = jasmine.createSpy('callback');

        callback([1, 2, 3, 4]);

        expect(callback).toHaveBeenCalledWith(
          jasmine.arrayContaining([4, 2, 3])
        );
        expect(callback).not.toHaveBeenCalledWith(
          jasmine.arrayContaining([5, 2])
        );
      });
    });
  });

  describe('jasmine.stringMatching', function () {
    it('matches as a regexp', function () {
      expect({ foo: 'bar' }).toEqual({
        foo: jasmine.stringMatching(/^bar$/),
      });
      expect({ foo: 'foobarbaz' }).toEqual({
        foo: jasmine.stringMatching('bar'),
      });
    });

    describe('when used with a spy', function () {
      it('is useful for comparing arguments', function () {
        const callback = jasmine.createSpy('callback');

        callback('foobarbaz');

        expect(callback).toHaveBeenCalledWith(jasmine.stringMatching('bar'));
        expect(callback).not.toHaveBeenCalledWith(
          jasmine.stringMatching(/^bar$/) // Check the part of the string.
        );
      });
    });
  });

  describe('custom asymmetry', function () {
    const tester = {
      asymmetricMatch: function (actual: string) {
        const secondValue = actual.split(',')[1];
        return secondValue === 'bar';
      },
    };

    it('dives in deep', function () {
      expect('foo,bar,baz,quux').toEqual(tester);
    });

    describe('when used with a spy', function () {
      it('is useful for comparing arguments', function () {
        const callback = jasmine.createSpy('callback');

        callback('foo,bar,baz');

        expect(callback).toHaveBeenCalledWith(tester);
      });
    });
  });

  describe('Manually ticking the Jasmine Clock', () => {
    let timerCallback: jasmine.Spy;

    beforeEach(() => {
      timerCallback = jasmine.createSpy('timerCallback');
      jasmine.clock().install(); // Declare Jasmine clock.
    });

    afterEach(() => {
      timerCallback = jasmine.createSpy('timerCallback');
      jasmine.clock().uninstall(); // Stop the clock.
    });

    it('causes a timeout to be called synchronously', function () {
      setTimeout(function () {
        timerCallback();
      }, 100);

      expect(timerCallback).not.toHaveBeenCalled();

      jasmine.clock().tick(101);

      expect(timerCallback).toHaveBeenCalled();
    });

    it('causes an interval to be called synchronously', function () {
      setInterval(function () {
        timerCallback();
      }, 100);

      expect(timerCallback).not.toHaveBeenCalled();

      jasmine.clock().tick(101);
      expect(timerCallback.calls.count()).toEqual(1);

      jasmine.clock().tick(50);
      expect(timerCallback.calls.count()).toEqual(1);

      jasmine.clock().tick(50);
      expect(timerCallback.calls.count()).toEqual(2);
    });

    describe('Mocking the Date object', () => {
      it('mocks the Date and sets it to a given time', () => {
        const baseTime = new Date(2013, 9, 23);

        jasmine.clock().mockDate(baseTime);

        jasmine.clock().tick(50);
        expect(new Date().getTime()).toEqual(baseTime.getTime() + 50);
      });
    });
  });
});
