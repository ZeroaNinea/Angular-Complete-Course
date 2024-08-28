import { of, concat } from "rxjs";

export function concatSpec() {
  concat(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)).subscribe(console.log);
}

/*
1. The `of` function creates an Observable from the given arguments.

2. The `concat` function combines the Observables passed to it as arguments into one Observable.
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
*/
