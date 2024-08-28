import { interval, timer, windowWhen, tap, mergeAll } from "rxjs";

export function windowwhenSpec() {
  const source$ = timer(0, 1000);
  const example$ = source$.pipe(
    windowWhen(() => interval(5000)),
    tap((_) => console.log("NEW WINDOW!")),
  );

  const subscribeTwo$ = example$.pipe(mergeAll()).subscribe(console.log);
}

/*
1. The `windowWhen` fuction closes window at provided time frame emitting Observable of collected values from source.
*/

/* Output:
'NEW WINDOW!'
'NEW WINDOW!'
10
'NEW WINDOW!'
15
16
'NEW WINDOW!'
20
21
22
'NEW WINDOW!'
25
26
27
28
'NEW WINDOW!'
*/
