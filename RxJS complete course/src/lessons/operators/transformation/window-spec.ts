import { timer, interval, window, scan, mergeAll, Observer } from "rxjs";

export function windowSpec() {
  const source$ = timer(0, 1000);
  const example$ = source$.pipe(window(interval(3000)));
  const count$ = example$.pipe(scan((acc, curr) => acc + 1, 0));

  const subscribe$ = count$.subscribe((val: number) =>
    console.log(`Window ${val}:`),
  );
  const subscribeTwo$ = example$.pipe(mergeAll()).subscribe(console.log);
}

/*
1. The `window` function creates an Observable of values for window of time.
*/

/* Output:
'Window 1:
0
1
2
'Window 2:'
3
4
5
'Window 3:'
6
7
8
...
*/
