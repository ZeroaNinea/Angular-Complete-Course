import { interval, of, expand, take } from "rxjs";

export function expandSpec() {
  const source$ = of(2);
  const example$ = source$
    .pipe(
      expand((val) => {
        console.log(`Passed value: ${val}`);
        return of(1 + val);
      }),
      take(5),
    )
    .subscribe((val) => console.log(`RESUST: ${val}`));
}

/*
1. The `expand` function recursively calls provided function.
*/

/* Output:
'RESUST: 2'
'Passed value: 2'
'RESUST: 3'
'Passed value: 3'
'RESUST: 4'
'Passed value: 4'
'RESUST: 5'
'Passed value: 5'
'RESUST: 6'
'Passed value: 6'
*/
