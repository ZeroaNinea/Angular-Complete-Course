import { from, single } from "rxjs";

export function singleSpec() {
  const source$ = from([1, 2, 3, 4, 5]);
  const example$ = source$
    .pipe(single((val) => val === 4))
    .subscribe((val) => console.log(val));
}

/*
1. The `single` function emits a single item that passes expression.
*/

/* Output:
4
*/
