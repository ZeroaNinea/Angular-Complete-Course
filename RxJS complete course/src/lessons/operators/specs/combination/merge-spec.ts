import { mapTo } from "rxjs/operators";
import { interval, merge, Observable } from "rxjs";

export function mergeSpec1() {
  const first = interval(2500);
  const second = interval(2000);
  const third = interval(1500);
  const fourth = interval(1000);

  const example = merge(
    first.pipe(mapTo("FIRST!")),
    second.pipe(mapTo("SECOND!")),
    third.pipe(mapTo("THIRD")),
    fourth.pipe(mapTo("FOURTH")),
  );

  example.subscribe((val) => console.log(val));
}

/*
1. The `mapTo` function replaces each emitted value with the constant specified as an argument.

2. The `merge` function combines emitted values from different Observables into a single stream.
*/

/* Output:
FOURTH
THIRD
SECOND!
FOURTH
FIRST!
THIRD
FOURTH
SECOND!
FOURTH
THIRD
FIRST!
...
*/

export function mergeSpec2() {
  const first = interval(2500);
  const second = interval(1000);

  const example = merge(first, second);
  example.subscribe((val) => console.log(val));
}

/* Output:
0
1
0
2
3
1
4
5
6
2
7
8
3
9
10
11
...
*/
