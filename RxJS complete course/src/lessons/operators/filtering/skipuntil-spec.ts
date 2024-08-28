import { interval, timer, skipUntil } from "rxjs";

export function skipuntilSpec() {
  const source$ = interval(1000);
  const example$ = source$.pipe(skipUntil(timer(6000)));
  example$.subscribe(console.log);
}

/*
1. The `skipUntil` function skips emitted values from source until provided Observable emits.
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
