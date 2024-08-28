import { interval, windowCount, mergeAll, tap } from "rxjs";

export function windowcountSpec() {
  const source$ = interval(1000);
  const example$ = source$.pipe(
    windowCount(4),
    tap((_) => console.log("NEW WINDOW!")),
  );

  const subscribeTwo = example$.pipe(mergeAll()).subscribe(console.log);
}

/*
1. The `windowCount` function creates an Observable of values from source, emitted each time provided count is fulfilled.
*/

/* Output:
'NEW WINDOW!'
0
1
2
3
'NEW WINDOW!'
4
5
6
7
...
*/
