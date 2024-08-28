import { every, delay, tap } from "rxjs/operators";
import { of, concat } from "rxjs";

export function everySpec1() {
  const source$ = of(1, 2, 3, 4, 5);
  const example$ = source$.pipe(every((val) => val % 2 === 0));

  example$.subscribe((val) => console.log(val));
}

/*
1. The `every` function emits true if all values passed predicate before completion, else the function emits false.
*/

/* Output:
false
*/

export function everySpec2() {
  const allEvents$ = of(2, 4, 6, 8, 10);
  const example$ = allEvents$.pipe(every((val) => val % 2 === 0));

  example$.subscribe((val) => console.log(val));
}

/* Output:
true
*/

export function everySpec3() {
  console.clear();

  const { log } = console;
  const returnCode = (request: any) => (Number.isInteger(request) ? 200 : 400);
  const fakeRequest = (request: any) =>
    of({ code: returnCode(request) }).pipe(
      tap((_) => log(request)),
      delay(1000),
    );

  const apiCalls$ = concat(
    fakeRequest(1),
    fakeRequest("invalid payload"),
    fakeRequest(2),
  ).pipe(
    every((e) => e.code === 200),
    tap((e) => log(`all request successful: ${e}`)),
  );

  apiCalls$.subscribe();
}

/*
1. The `tap` function is using for log notifications about the Observable.
*/

/* Output:
1
Server is running on port 3000
all request successful: false
*/
