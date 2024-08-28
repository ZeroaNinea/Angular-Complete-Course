import { of, reduce } from "rxjs";

export function reduceSpec() {
  const source$ = of(1, 2, 3, 4);

  const example$ = source$
    .pipe(reduce((acc, val) => acc + val))
    .subscribe((val) => console.log("Sum:", val));
}

/* Output:
'Sum:' 10
*/
