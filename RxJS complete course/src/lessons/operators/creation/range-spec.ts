import { range } from "rxjs";

export function rangeSpec() {
  const source$ = range(1, 10);

  source$.subscribe(console.log);
}

/*
1. The `range` function emits numbers in provided range in sequence.
*/

/* Output:
1
2
3
4
5
6
7
8
9
10
*/
