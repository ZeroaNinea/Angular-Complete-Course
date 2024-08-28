import { interval, throttle, map } from "rxjs";

export function throttleSpec1() {
  const source$ = interval(1000);
  const example$ = source$
    .pipe(throttle((val) => interval(2000)))
    .subscribe(console.log);
}

/* Output:
0
2
4
7
9
11
13
15
17
19
*/

export function throttleSpec2() {
  const source$ = interval(1000);

  const promise = (val: any) =>
    new Promise((resolve) =>
      setTimeout(() => resolve(`Resolved: ${val}`), val * 100),
    );
  const example$ = source$
    .pipe(
      throttle(promise),
      map((val) => `Throttled off Promise: ${val}`),
    )
    .subscribe(console.log);
}

/* Output:
Throttled off Promise: 0
Throttled off Promise: 1
Throttled off Promise: 2
Throttled off Promise: 3
Throttled off Promise: 4
Throttled off Promise: 5
*/
