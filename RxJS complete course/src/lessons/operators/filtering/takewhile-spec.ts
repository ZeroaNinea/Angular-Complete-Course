import { of, takeWhile, filter } from "rxjs";

export function takewhileSpec1() {
  const source$ = of(1, 2, 3, 4, 5);

  source$.pipe(takeWhile((val) => val <= 4)).subscribe(console.log);
}

/*
1. The `takeWhile` function emits values until provided expression is false.
*/

/* Output:
1
2
3
4
*/

export function takewhileSpec2() {
  const source$ = of(1, 2, 3, 9);

  source$.pipe(takeWhile((val) => val <= 3, true)).subscribe(console.log);
}

/* Output:
1
2
3
9
*/

export function takewhileSpec3() {
  const source$ = of(3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 3, 3);

  source$
    .pipe(takeWhile((it) => it === 3))
    .subscribe((val) => console.log("takeWhile", val));

  source$
    .pipe(filter((it) => it === 3))
    .subscribe((val) => console.log("filter", val));
}

/* Output:
takeWhile 3
takeWhile 3
takeWhile 3
filter 3
filter 3
filter 3
filter 3
filter 3
filter 3
*/
