import { interval, take, ignoreElements, throwError, of, mergeMap } from "rxjs";

export function ignoreelementsSpec1() {
  const source$ = interval(100);
  const example$ = source$.pipe(take(5), ignoreElements()).subscribe(
    (val) => console.log(`NEXT: ${val}`),
    (val) => console.log(`ERROR: ${val}`),
    () => console.log("COMPLETE!"),
  );
}

/*
1. The `ignoreElements` function ignores everthing, but complete and errer.
*/

/* Output:
'COMPLETE!'
*/

export function ignoreelementsSpec2() {
  const source$ = interval(100);
  const error$ = source$
    .pipe(
      mergeMap((val) => {
        if (val === 4) {
          return throwError(`ERROR AT ${val}`);
        }
        return of(val);
      }),
      ignoreElements(),
    )
    .subscribe(
      (val) => console.log(`NEXT: ${val}`),
      (val) => console.log(`ERROR: ${val}`),
      () => console.log("SECOND COMPLETE!"),
    );
}

/* Output:
'ERROR: ERROR AT 4'
*/
