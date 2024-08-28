import { interval, toArray, take } from "rxjs";

export function toarraySpec() {
  interval(100).pipe(take(10), toArray()).subscribe(console.log);
}

/* Output:
[
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9
]
*/
