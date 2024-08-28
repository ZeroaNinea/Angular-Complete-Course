import { JSDOM } from "jsdom";

import { throwError, of, timer, from, fromEvent } from "rxjs";
import {
  catchError,
  mergeMap,
  tap,
  switchMap,
  concatMap,
  exhaustMap,
} from "rxjs/operators";

export function catch_catcherrorSpec1() {
  const source$ = throwError("This is an error!");
  const example$ = source$.pipe(catchError((val) => of(`I caught: ${val}`)));
  example$.subscribe((val) => console.log(val));
}

/* Output:
'I cought: This is an error!'
*/

export function catch_catcherrorSpec2() {
  const myBadPromise = () =>
    new Promise((resolve, reject) => reject("Rejected!"));

  const source$ = timer(1000);
  const example$ = source$.pipe(
    mergeMap((_) =>
      from(myBadPromise()).pipe(
        catchError((error) => of(`Bad Promise: ${error}`)),
      ),
    ),
  );

  example$.subscribe((val) => console.log(val));
}

/* Output:
'Bad Promise: Rejected!'
*/

export function catch_catcherrorSpec3() {
  const markup = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Page Title</title>
      </head>
      <body>
        <button id="continued">Continue</button>
        <button id="stopped">Stop</button>
      </body>
    </html>
  `;

  const dom = new JSDOM(markup);
  const document = dom.window.document;

  const fakeRequest$ = of().pipe(
    tap(() => console.log("fakeRequest")),
    switchMap(() => throwError(() => new Error("Request failed"))),
  );

  const iWillContinueListening$ = fromEvent(
    document.getElementById("continued")!,
    "click",
  ).pipe(
    switchMap(() =>
      fakeRequest$.pipe(catchError(() => of("keep on clicking!!!"))),
    ),
  );

  const iWillStopListening$ = fromEvent(
    document.getElementById("stopped")!,
    "click",
  ).pipe(
    switchMap(() => fakeRequest$),
    catchError(() => of("no more requests!!!")),
  );

  iWillContinueListening$.subscribe(console.log);
  iWillStopListening$.subscribe(console.log);

  document.getElementById("continued")!.dispatchEvent(
    new dom.window.MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    }),
  );

  document.getElementById("stopped")!.dispatchEvent(
    new dom.window.MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    }),
  );
}

/*
1. The `exhaustMap` function creates an Observable that contains other Observables, but the inner Observable is added to the outer Observable only after the inner Observable has finished its emissions.
*/
