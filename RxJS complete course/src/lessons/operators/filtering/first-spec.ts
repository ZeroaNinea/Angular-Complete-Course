import { from, first } from "rxjs";

export function firstSpec1() {
  const source$ = from([1, 2, 3, 4, 5]);
  const example$ = source$
    .pipe(first())
    .subscribe((val) => console.log(`First value: ${val}`));
}

/*
1. The `first` function emits the first value or first to pass provided expression.
*/

/* Output:
'First value: 1'
*/

export function firstSpec2() {
  const source$ = from([1, 2, 3, 4, 5]);
  const example$ = source$
    .pipe(first((num) => num === 5))
    .subscribe((val) => console.log(`First to pass test: ${val}`));
}

/* Output:
'First to pass test: 5'
*/

export function firstSpec3() {
  const source$ = from([1, 2, 3, 4, 5]);
  const example$ = source$
    .pipe(first((val) => val > 6, "Nothing"))
    .subscribe((val) => console.log(val));
}

/* Output:
'Nothing'
*/
