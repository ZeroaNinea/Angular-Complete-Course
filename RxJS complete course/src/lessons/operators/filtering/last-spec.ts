import { from, last } from "rxjs";

export function lastSpec1() {
  const source$ = from([1, 2, 3, 4, 5]);
  const example$ = source$
    .pipe(last())
    .subscribe((val) => console.log(`Last value: ${val}`));
}

/*
1. The `last` function emits the last value emitted from source on completion, based on provided expression.
*/

/* Output:
'Last value: 5'
*/

export function lastSpec2() {
  const source$ = from([1, 2, 3, 4, 5]);
  const exampleTwo$ = source$
    .pipe(last((num) => num % 2 === 0))
    .subscribe((val) => console.log(`Last to pass test: ${val}`));
}

/* Output:
'Last to pass test: 4'
*/

export function lastSpec3() {
  const source$ = from([1, 2, 3, 4, 5]);
  const exampleTwo$ = source$
    .pipe(last((val) => val > 5, "Nothing!"))
    .subscribe((val) => console.log(val));
}

/* Output:
'Nothing!'
*/
