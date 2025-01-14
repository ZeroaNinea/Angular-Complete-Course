declare namespace jasmine {
  interface Matchers<T> {
    toBeEven(): boolean;
    toBeInRange: (min: number, max: number) => boolean;
  }
}
