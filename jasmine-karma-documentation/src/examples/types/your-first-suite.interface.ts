export interface Foo {
  setBar: jasmine.Spy<jasmine.Func>;
}

export interface Tape {
  play: () => void;
  pause: () => void;
  stop: () => void;
  rewind: (number: number) => void;
}
