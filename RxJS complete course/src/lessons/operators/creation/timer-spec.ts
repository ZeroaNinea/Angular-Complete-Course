import { timer } from "rxjs";

export function timerSpec1() {
  const source$ = timer(1000);

  source$.subscribe(console.log);
}

/* Output:
0
*/

export function timerSpec2() {
  const source$ = timer(1000, 2000);

  source$.subscribe(console.log);
}

/* Output
0
1
2
3
4
5
...
*/
