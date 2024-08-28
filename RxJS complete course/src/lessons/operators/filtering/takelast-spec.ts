import { of, takeLast } from "rxjs";

export function takelastSpec() {
  const source$ = of("Ignore", "Ignore", "Hello,", "World!");
  const example$ = source$
    .pipe(takeLast(2))
    .subscribe((val) => console.log(val));
}

/*
1. The `takeLast` function waits for the source to complete, then emits the last N values from the source, as specified by the `count` argument.
*/

/* Output:
Hello,
World!
*/
