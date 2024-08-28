import { withLatestFrom, map } from "rxjs/operators";
import { interval } from "rxjs";

export function withlatestfromSpec1() {
  const source$ = interval(5000);
  const secondSource$ = interval(1000);

  const example$ = source$.pipe(
    withLatestFrom(secondSource$),
    map(([first, second]) => {
      return `First Source (5s): ${first} Second Source (1s): ${second}`;
    }),
  );

  example$.subscribe((val) => console.log(val));
}

/*
1. The `withLatestFrom` function in RxJS combines the source Observable with one or more other Observables to create a new Observable.
*/

/* Output:
First Source (5s): 0 Second Source (1s): 3
First Source (5s): 1 Second Source (1s): 8
First Source (5s): 2 Second Source (1s): 13
First Source (5s): 3 Second Source (1s): 18
First Source (5s): 4 Second Source (1s): 23
*/

export function withlatestfromSpec2() {
  const source$ = interval(5000);
  const secondSource$ = interval(1000);

  const example$ = secondSource$.pipe(
    withLatestFrom(source$),
    map(([first, second]) => {
      return `Source (1s): ${first} Latest From (5s): ${second}`;
    }),
  );

  example$.subscribe((val) => console.log(val));
}

/* Output:
"Source (1s): 4 Latest From (5s): 0"
"Source (1s): 5 Latest From (5s): 0"
"Source (1s): 6 Latest From (5s): 0"
...
*/
