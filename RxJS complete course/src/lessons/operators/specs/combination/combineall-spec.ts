import { take, map, combineLatestAll } from "rxjs/operators";
import { interval } from "rxjs";

export function combineallSpec() {
  const source$ = interval(1000).pipe(take(2));
  // console.log(source$);
  // source$.subscribe(console.log); // An example of using the `subscribe` function.

  const example$ = source$.pipe(
    map((val) =>
      interval(1000).pipe(
        map((i) => `Result (${val}): ${i}`),
        take(5),
      ),
    ),
  );

  example$.pipe(combineLatestAll()).subscribe(console.log);
}

/*
Reactive programming is a style of programming in which responses to events occur instantly. RxJS is a library for reactive programming.

Observable is a custom data structure that contains properties that are asynchronous functions. To invoke the Observable and see these values, we need to subscribe to it with the `subscribe` function.

---------------------------

1. The `take` function returns only the number of specified as an argument that it received from the Observable.

2. The `interval` function creates an Observable that returns a sequence of numbers for the amount of time passed as an argument.

3. The `map` function applies the specified callback function to each Observable element.

4. `pipe` is a chaining function that passes the value it is applied to to each function passed to it as an argument.

5. The `combineLatest` function takes an outer Observable as its value and returns the latest value of each inner Observable.
*/

/* Output:
[ 'Result (0): 0', 'Result (1): 0' ]
[ 'Result (0): 1', 'Result (1): 0' ]
[ 'Result (0): 1', 'Result (1): 1' ]
[ 'Result (0): 2', 'Result (1): 1' ]
[ 'Result (0): 2', 'Result (1): 2' ]
[ 'Result (0): 3', 'Result (1): 2' ]
[ 'Result (0): 3', 'Result (1): 3' ]
[ 'Result (0): 4', 'Result (1): 3' ]
[ 'Result (0): 4', 'Result (1): 4' ]
*/
