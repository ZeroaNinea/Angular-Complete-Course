import axios from "axios";

import { ajax } from "rxjs/ajax";
import { forkJoin, interval, of, throwError } from "rxjs";
import { delay, take, mergeMap, catchError } from "rxjs/operators";

export function forkjoinSpec1() {
  axios
    .get("http://localhost:3000/api/data")
    .then((response) => {
      forkJoin({
        google: ajax.getJSON("https://api.github.com/users/google"),
        microsoft: ajax.getJSON("https://api.github.com/users/microsoft"),
        users: ajax.getJSON("https://api.github.com/users"),
      }).subscribe(console.log);
    })
    .catch((error) => {
      console.error("Error fetching data for forkjoin-spec:", error);
    });
}

/*
1. The `ajax` function creates an Observable object for AJAX or URL requests.

2. The `forkJoin` function accepts an Array of `ObservableInput` or a ductionary of ObservableInput and ruterns an Observable that emits either an array of values in the exact same order as the passed array, or a dictionary of values in the same shape as the passed dictionary.
*/

export function forkjoinSpec2() {
  const myPromise = (val: string) =>
    new Promise((resolve) =>
      setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000),
    );

  const example$ = forkJoin({
    sourceOne: of("Hello"),
    sourceTwo: of("World").pipe(delay(1000)),
    sourceThree: interval(1000).pipe(take(1)),
    sourceFour: interval(1000).pipe(take(2)),
    sourceFive: myPromise("RESULT"),
  });

  example$.subscribe((val) => console.log(val));
}

/*
1. Delays the emission of items from the source Observable by a given timeout.
*/

/* Output:
{
  sourceOne: 'Hello',
  sourceTwo: 'World',
  sourceThree: 0,
  sourceFour: 1,
  sourceFive: 'Promise Resolved: RESULT'
} 
*/

export function forkjoinSpec3() {
  const myPromise = (val: string | number) =>
    new Promise((resolve) =>
      setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000),
    );

  const source$ = of([1, 2, 3, 4, 5]);
  const example$ = source$.pipe(mergeMap((q) => forkJoin(...q.map(myPromise))));

  example$.subscribe((val) => console.log(val));
}

/*
1. The `mergeMap` function projects each source value to an Observable which is merged in the output Observable.
*/

/* Output:
[
  'Promise Resolved: 1',
  'Promise Resolved: 2',
  'Promise Resolved: 3',
  'Promise Resolved: 4',
  'Promise Resolved: 5'
]
*/

export function forkjoinSpec4() {
  const example$ = forkJoin({
    sourceOne: of("Hello"),
    sourceTwo: of("World").pipe(delay(1000)),
    sourceThree: throwError("This will error"),
  }).pipe(catchError((error) => of(error)));

  example$.subscribe((val) => console.log(val));
}

/*
1. The `catchError` function catches errors on the Observable to be handled by returning a new observable or throwing an error.

2. The `throwError` function creates an Observable with error and push it to the consumer as an error immediately upon subscription.
*/

/* Output:
'This will error'
*/

export function forkjoinSpec5() {
  const example$ = forkJoin({
    sourceOne: of("Hello"),
    sourceTwo: of("World").pipe(delay(1000)),
    sourceThree: throwError("This will error").pipe(
      catchError((error) => of(error)),
    ),
  });

  // example$.subscribe((val) => console.log(val));
  example$.subscribe(console.log);
}

/* Output:
{
  sourceOne: "Hello",
  sourceTwo: "World",
  sourceThree: "This will error"
}
*/
