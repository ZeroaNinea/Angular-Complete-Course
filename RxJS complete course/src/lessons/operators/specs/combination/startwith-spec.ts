import { startWith, scan } from "rxjs/operators";
import { of, interval } from "rxjs";

export function startwithSpec1() {
  const source$ = of(1, 2, 3);
  const example$ = source$.pipe(startWith(0));

  example$.subscribe((val) => console.log(val));
}

/*
1. The `startWith` function adds something to the start of the sequence.
*/

/* Output:
0
1
2
3
*/

export function startwithSpec2() {
  const source$ = of("Wolrd!", "Goodbye", "World!");

  const example$ = source$.pipe(
    startWith("Hello"),
    scan((acc, curr) => `${acc} ${curr}`),
  );

  example$.subscribe((val) => console.log(val));
}

/*
1. The `scan` function accumulates the values emitted by the Observable and emits them all when all of its arguments are accepted.
*/

/* Output:
Hello
Hello Wolrd!
Hello Wolrd! Goodbye
Hello Wolrd! Goodbye World!
*/

export function startwithSpec3() {
  const source$ = interval(1000);

  const example$ = source$.pipe(startWith(-3, -2, -1));

  example$.subscribe((val) => console.log(val));
}

/* Output:
-3
-2
-1
0
1
...
*/
