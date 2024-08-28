import { JSDOM } from "jsdom";

import {
  interval,
  bufferCount,
  fromEvent,
  of,
  map,
  mergeMap,
  tap,
  OperatorFunction,
} from "rxjs";

const markup = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Page Title</title>
    </head>
    <body>
      <h1>Hello, World!</h1>
      <p>Just a simple HTML file.</p>
      <div id="output"></div>
    </body>
  </html>
`;

const dom = new JSDOM(markup);
const document = dom.window.document;

export function buffercountSpec1() {
  const source$ = interval(1000);

  const bufferThree$ = source$
    .pipe(bufferCount(3))
    .subscribe((val) => console.log("Buffered Values:", val));
}

/*
1. The `bufferCount` function collects emitted values until provided number is filfilled, emit as array.
*/

/* Output:
'Buffered Values:' [ 0, 1, 2 ]
'Buffered Values:' [ 3, 4, 5 ]
'Buffered Values:' [ 6, 7, 8 ]
'Buffered Values:' [ 9, 10, 11 ]
'Buffered Values:' [ 12, 13, 14 ]
'Buffered Values:' [ 15, 16, 17 ]
'Buffered Values:' [ 18, 19, 20 ]
'Buffered Values:' [ 21, 22, 23 ]
*/

export function buffercountSpec2() {
  const source$ = interval(1000);

  const bufferEveryOne$ = source$
    .pipe(bufferCount(3, 1))
    .subscribe((val) => console.log("Start Buffer Every 1:", val));
}

/* Output:
'Start Buffer Every 1:' [ 0, 1, 2 ]
'Start Buffer Every 1:' [ 1, 2, 3 ]
'Start Buffer Every 1:' [ 2, 3, 4 ]
'Start Buffer Every 1:' [ 3, 4, 5 ]
'Start Buffer Every 1:' [ 4, 5, 6 ]
'Start Buffer Every 1:' [ 5, 6, 7 ]
'Start Buffer Every 1:' [ 6, 7, 8 ]
*/

export function buffercountSpec3() {
  const fakeKeyPressesPost$ = (keypresses: string[]) =>
    of(201).pipe(
      tap(() => {
        console.log(`Received key presses are: ${keypresses}`);
        const outputElement = document.getElementById("output");
        if (outputElement) {
          outputElement.innerText = keypresses.join(", ");
        }
      }),
    );

  fromEvent<KeyboardEvent>(document, "keydown")
    .pipe(
      map((e) => e.key),
      bufferCount(5),
      mergeMap(fakeKeyPressesPost$),
    )
    .subscribe(console.log);

  const event1 = new dom.window.KeyboardEvent("keydown", { key: "a" });
  const event2 = new dom.window.KeyboardEvent("keydown", { key: "b" });
  const event3 = new dom.window.KeyboardEvent("keydown", { key: "c" });
  const event4 = new dom.window.KeyboardEvent("keydown", { key: "d" });
  const event5 = new dom.window.KeyboardEvent("keydown", { key: "e" });

  document.dispatchEvent(event1);
  document.dispatchEvent(event2);
  document.dispatchEvent(event3);
  document.dispatchEvent(event4);
  document.dispatchEvent(event5);
}

/* Output:
'Received key presses are: a,b,c,d,e'
201
*/
