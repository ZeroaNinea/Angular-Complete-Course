import { defaultIfEmpty } from "rxjs/operators";
import { of, empty } from "rxjs";

export function defaultifemptySpec1() {
  const exampleOne$ = of().pipe(defaultIfEmpty("Observable.of() Empty!"));
  exampleOne$.subscribe((val) => console.log(val));
}

/*
1. The `defaultIfEmpty` function emit given value if nothing is emitted before completion.
*/

/* Output:
Observable.of() Empty!
*/

export function defaultifemptySpec2() {
  const example$ = empty().pipe(defaultIfEmpty("Observable.empty()!"));
  example$.subscribe((val) => console.log(val));
}

/* Output:
Observable.empty()!
*/
