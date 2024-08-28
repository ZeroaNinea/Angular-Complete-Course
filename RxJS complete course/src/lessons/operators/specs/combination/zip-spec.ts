/// <reference lib="dom" />

import axios from "axios";

import { fromEvent, of, interval, zip } from "rxjs";
import { map, zipWith, delay, take } from "rxjs/operators";

export function zipSpec1() {
  const sourceOne$ = of("Hello");
  const sourceTwo$ = of("World!");
  const sourceThree$ = of("Goodbye");
  const sourceFour$ = of("World!");

  const example$ = sourceTwo$.pipe(
    zipWith(sourceThree$.pipe(delay(2000)), sourceFour$.pipe(delay(3000))),
  );

  example$.subscribe((val) => console.log(val));
}

/*
1. The `zipWith` function combines multiple Observables to create an Observable whose values are calculated from sthe latest values of each input Observable only when all Observables have emitted a value.

2. The `fromEvent` function creates an Observable that emits events of a specific type coming from a specified event target.
*/

export function zipSpec2() {
  const source$ = interval(1000);
  const example$ = source$.pipe(zipWith(source$.pipe(take(2))));
  example$.subscribe((val) => console.log(val));
}

/* Output:
[0, 0]
[1, 1]
*/
