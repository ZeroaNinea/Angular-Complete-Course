import { interval, merge, of, delay, take, exhaustMap } from "rxjs";

export function exhaustmapSpec1() {
  const sourceInterval$ = interval(1000);
  const delayedInterval$ = sourceInterval$.pipe(delay(10), take(4));

  const exhaustSub$ = merge(delayedInterval$, of(true))
    .pipe(exhaustMap((_) => sourceInterval$.pipe(take(5))))
    .subscribe(console.log);
}

/*
1. The `exhaustMap` function maps to inner Observable, ignore other values until that Observable completes.
*/

/* Output:
0
1
2
3
4
*/

export function exhaustmapSpec2() {
  const firstInterval$ = interval(1000).pipe(take(10));
  const secondInterval$ = interval(1000).pipe(take(2));

  const exhaustSub$ = firstInterval$
    .pipe(
      exhaustMap((f) => {
        console.log(`Emission Corrected of first interval: ${f}`);
        return secondInterval$;
      }),
    )
    .subscribe(console.log);
}

/* Output:
'Emission Corrected of first interval: 0'
0
1
'Emission Corrected of first interval: 2'
0
1
'Emission Corrected of first interval: 4'
0
1
'Emission Corrected of first interval: 6'
0
1
'Emission Corrected of first interval: 8'
0
1
*/
