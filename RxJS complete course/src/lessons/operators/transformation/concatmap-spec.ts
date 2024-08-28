import { of, concatMap, delay, mergeMap } from "rxjs";

export function concatmapSpec1() {
  const source$ = of(2000, 1000);
  const example$ = source$
    .pipe(concatMap((val) => of(`Delayed by: ${val}ms`).pipe(delay(val))))
    .subscribe((val) => console.log(`With concatMap: ${val}`));

  const mergeMapExample = source$
    .pipe(
      delay(5000),
      mergeMap((val) => of(`Delayed by: ${val}ms`).pipe(delay(val))),
    )
    .subscribe((val) => console.log(`With mergeMap: ${val}`));
}

/*
1. The `concatMap` function maps values to inner Observable, subscribes and emits in order.
*/

/* Output:
With concatMap: Delayed by: 2000ms
With concatMap: Delayed by: 1000ms
With mergeMap: Delayed by: 1000ms
With mergeMap: Delayed by: 2000ms
*/

export function concatmapSpec2() {
  const source$ = of("Hello", "Goodbye");
  const examplePromise$ = (val: string) =>
    new Promise((resolve) => resolve(`${val} World!`));
  const example$ = source$
    .pipe(concatMap((val) => examplePromise$(val)))
    .subscribe((val) => console.log("Example w/ Promise:", val));
}

/* Output:
Example w/ Promise: Hello World!
Example w/ Promise: Goodbye World!
*/

export function concatmapSpec3() {
  const source$ = of("Hello", "Goodbye");
  const examplePromise$ = (val: string) =>
    new Promise((resolve) => resolve(`${val} World!`));
  const example$ = source$
    .pipe(
      concatMap(
        (val) => examplePromise$(val),
        (result) => `${result} w/ selector!`,
      ),
    )
    .subscribe((val) => console.log("Example w/ Selector:", val));
}

/* Output:
'Example w/ Selector: Hello w/ selector!'
'Example w/ Selector: Goodbye w/ selector!'
*/
