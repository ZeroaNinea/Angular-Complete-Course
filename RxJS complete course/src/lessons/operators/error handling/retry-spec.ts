import { interval, of, throwError } from "rxjs";
import { mergeMap, retry } from "rxjs/operators";

export function retrySpec() {
  const source$ = interval(1000);
  const example$ = source$.pipe(
    mergeMap((val) => {
      if (val > 5) {
        return throwError("Error!");
      }
      return of(val);
    }),
    retry(2),
  );

  example$.subscribe({
    next: (val) => console.log(val),
    error: (val) => console.log(`${val}: Retried 2 times then quit!`),
  });
}

/*
1. The `retry` function retry an Observable sequence a specific number of times should an error occur.
*/

/* Output
0
1
2
3
4
5
0
1
2
3
4
5
0
1
2
3
4
5
Error!: Retried 2 times then quit!
*/
