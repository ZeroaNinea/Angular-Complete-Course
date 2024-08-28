import { timer, interval, tap, windowToggle, mergeAll } from "rxjs";

export function windowtoggleSpec() {
  const source$ = timer(0, 1000);
  const toggle$ = interval(5000);

  const example$ = source$.pipe(
    windowToggle(toggle$, (val) => interval(val * 1000)),
    tap((_) => console.log("NEW WINDOW!")),
  );

  const subscribeTwo$ = example$.pipe(mergeAll()).subscribe(console.log);
}

/* Output:
1. The `windowToggle` function collects and emits Observable of values from source between opening and closing emission.
*/

/* Output:
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
...
*/
