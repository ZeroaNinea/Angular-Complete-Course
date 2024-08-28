import { interval, skipWhile } from "rxjs";

export function skipwhileSpec() {
  const source$ = interval(1000);
  const example$ = source$
    .pipe(skipWhile((val) => val < 5))
    .subscribe(console.log);
}

/*
1. The `skipWhile` function skips emitted values from source until provided expression is false.
*/

/* Output:
5
6
7
8
9
10
...
*/
