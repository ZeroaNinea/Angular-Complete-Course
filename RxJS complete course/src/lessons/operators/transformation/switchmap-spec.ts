import { JSDOM } from "jsdom";

import {
  interval,
  fromEvent,
  switchMap,
  merge,
  empty,
  scan,
  takeWhile,
  startWith,
  mapTo,
  timer,
  Observer,
  Observable,
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
      <div id="remaining">10</div>
      <button id="pause">Pause</button>
      <button id="resume">Resume</button>
    </body>
  </html>
`;

const dom = new JSDOM(markup);
const document = dom.window.document;

export function switchmapSpec1() {
  fromEvent(document, "click")
    .pipe(switchMap(() => interval(1000)))
    .subscribe(console.log);

  const event = new dom.window.MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: dom.window as unknown as Window,
  });

  document.dispatchEvent(event);
}

/* Output:
0
1
2
3
4
5
6
7
8
9
10
...
*/

export function switchmapSpec2() {
  const COUNTDOWN_SECONDS = 10;

  const remainingLabel = document.getElementById("remaining") as HTMLElement;
  const pauseButton = document.getElementById("pause") as HTMLButtonElement;
  const resumeButton = document.getElementById("resume") as HTMLButtonElement;

  const interval$ = interval(1000).pipe(mapTo(-1));
  const pause$ = fromEvent(pauseButton, "click").pipe(mapTo(false));
  const resume$ = fromEvent(resumeButton, "click").pipe(mapTo(true));

  const timer$ = merge(pause$, resume$)
    .pipe(
      startWith(true),
      switchMap((val) => (val ? interval$ : empty())),
      scan(
        (acc: number, curr: number) => (curr ? curr + acc : acc),
        COUNTDOWN_SECONDS,
      ),
      takeWhile((v) => v >= 0),
    )
    .subscribe((val: number) => {
      remainingLabel.innerHTML = val.toString();
      console.log(val);
    });

  pauseButton.click();
  resumeButton.click();
}

/* Output:
9
8
7
6
5
4
3
2
1
0
*/

export function switchmapSpec3() {
  timer(0, 5000)
    .pipe(
      switchMap(
        () => interval(2000),
        (
          outerValue: number,
          innerValue: number,
          outerIndex: number,
          innerIndex: number,
        ) => ({
          outerValue,
          innerValue,
          outerIndex,
          innerIndex,
        }),
      ),
    )
    .subscribe(console.log);
}

/* Output:
{ outerValue: 0, innerValue: 0, outerIndex: 0, innerIndex: 0 }
{ outerValue: 0, innerValue: 1, outerIndex: 0, innerIndex: 1 }
{ outerValue: 1, innerValue: 0, outerIndex: 1, innerIndex: 0 }
{ outerValue: 1, innerValue: 1, outerIndex: 1, innerIndex: 1 }
{ outerValue: 2, innerValue: 0, outerIndex: 2, innerIndex: 0 }
{ outerValue: 2, innerValue: 1, outerIndex: 2, innerIndex: 1 }
{ outerValue: 3, innerValue: 0, outerIndex: 3, innerIndex: 0 }
{ outerValue: 3, innerValue: 1, outerIndex: 3, innerIndex: 1 }
{ outerValue: 4, innerValue: 0, outerIndex: 4, innerIndex: 0 }
{ outerValue: 4, innerValue: 1, outerIndex: 4, innerIndex: 1 }
*/
