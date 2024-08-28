import { map, concatAll, take } from "rxjs/operators";
import { of, interval } from "rxjs";

export function concatallSpec1() {
  const source$ = interval(2000);

  const example$ = source$.pipe(
    map((val) => of(val + 0)),
    concatAll(),
  );

  example$.subscribe((val) =>
    console.log("Example with Basic Observable: ", val),
  );
}

/*
1. The `concatAll` function combines several Observables into one Observable.
*/

/* Output:
Example with Basic Observable:  0
Example with Basic Observable:  1
Example with Basic Observable:  2
Example with Basic Observable:  3
Example with Basic Observable:  4
Example with Basic Observable:  5
...
*/

export function concatallSpec2() {
  const samplePromise = (val: number) => new Promise((resolve) => resolve(val));

  const source$ = interval(2000);

  const example$ = source$.pipe(
    map((val) => samplePromise(val)),
    concatAll(),
  );

  const subscribe$ = example$.subscribe((val) =>
    console.log("Example with Promise:", val),
  );
}

/* Output:
Example with Promise: 0
Example with Promise: 1
Example with Promise: 2
Example with Promise: 3
Example with Promise: 4
Example with Promise: 5
...
*/

export function concatallSpec3() {
  const obs1 = interval(1000).pipe(take(5));
  const obs2 = interval(500).pipe(take(2));
  const obs3 = interval(2000).pipe(take(1));

  const source$ = of(obs1, obs2, obs3);

  const example$ = source$.pipe(concatAll());

  example$.subscribe((val) => console.log(val));
}

/*
  output: 0,1,2,3,4,0,1,0
  How it works...
  Subscribes to each inner observable and emit values, when complete subscribe to next
  obs1: 0,1,2,3,4 (complete)
  obs2: 0,1 (complete)
  obs3: 0 (complete)
*/
