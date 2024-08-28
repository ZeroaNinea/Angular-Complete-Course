import { interval } from "rxjs";

export function intervalSpec() {
  const source$ = interval(1000);

  source$.subscribe((val) => console.log(val));
}

/* Output:
1
2
3
4
5
6
...
*/
