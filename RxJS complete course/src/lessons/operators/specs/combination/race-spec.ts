import { mapTo, delay, map } from "rxjs/operators";
import { interval, race, of } from "rxjs";

export function raceSpec1() {
  const example$ = race(
    interval(1500),
    interval(1000).pipe(mapTo("1s won!")),
    interval(2000),
    interval(2500),
  );

  example$.subscribe((val) => console.log(val));
}

/*
1. The `race` function takes multiple Observables and emits the value the first emitted Observable.
*/

/* Output:
1s won!
1s won!
1s won!
...
*/

export function raceSpec2() {
  const first = of("first").pipe(
    delay(100),
    map((_) => {
      throw "error";
    }),
  );

  const second = of("second").pipe(delay(200));
  const third = of("third").pipe(delay(300));

  race(first, second, third).subscribe((val) => console.log(val));
}

/*
This code throws an error and ignores all other Observables.
*/

/* Output:
'error'
*/
