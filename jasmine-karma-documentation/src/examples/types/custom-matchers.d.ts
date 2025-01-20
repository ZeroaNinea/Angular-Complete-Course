declare namespace jasmine {
  interface Matchers {
    toBeEven(): boolean;
    toBeInRange(min: number, max: number): boolean;
  }
}
