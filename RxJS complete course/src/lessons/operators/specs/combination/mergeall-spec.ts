import { map, mergeAll, take, delay } from "rxjs/operators";
import { of, interval } from "rxjs";

export function mergeallSpec1() {
  const myPromise = (val: any) =>
    new Promise((resolve) => setTimeout(() => resolve(`Result: ${val}`), 2000));

  const source$ = of(1, 2, 3);

  const example$ = source$.pipe(
    map((val) => myPromise(val)),
    mergeAll(),
  );

  const subscribe = example$.subscribe((val) => console.log(val));
}

/*
1. The `mergeAll` function converts a higher-order Observable into a first-order Observable which concurrently delivers all values that are emitted on the inner Observables.
*/

/* Output:
Result: 1
Result: 2
Result: 3
*/

export function mergeallSpec2() {
  const source$ = interval(500).pipe(take(5));

  source$
    .pipe(
      map((val) => source$.pipe(delay(1000), take(3))),
      mergeAll(2),
    )
    .subscribe((val) => console.log(val));
}

/*
Interval is emitting a value every 0.5s. This value is then being mapped to interval that is delayed for 1.0s. The `mergeAll` operator takes an optional argument that determines how many inner observables are stored in a backlog waiting to be subscribe.
*/

/* Output:
0
1
0
2
1
2
0
1
0
2
1
2
0
1
2
*/
