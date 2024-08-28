import { JSDOM } from "jsdom";

import {
  interval,
  timer,
  takeUntil,
  filter,
  scan,
  map,
  withLatestFrom,
  Observer,
  fromEvent,
  mergeMap,
} from "rxjs";

export function takeuntilSpec1() {
  const source$ = interval(1000);
  const timer$ = timer(5000);
  const example$ = source$.pipe(takeUntil(timer$)).subscribe(console.log);
}

/*
1. The `takeUntil` function emits values until provided observable emits.
*/

/* Output:
0
1
2
3
*/

export function takeuntilSpec2() {
  const source$ = interval(1000);
  const isEven = (val: number) => val % 2 === 0;
  const evenSource$ = source$.pipe(filter(isEven));
  const evenNumberCount$ = evenSource$.pipe(scan((acc, _) => acc + 1, 0));
  const fiveEvenNumbers$ = evenNumberCount$.pipe(filter((val) => val > 5));

  const example$ = evenSource$
    .pipe(
      withLatestFrom(evenNumberCount$),
      map(([val, count]) => `Even number (${count}) : ${val}`),
      takeUntil(fiveEvenNumbers$),
    )
    .subscribe(console.log);
}

/* Output:
Even number (1) : 0
Even number (2) : 2
Even number (3) : 4
Even number (4) : 6
Even number (5) : 8
*/

export function takeuntilSpec3() {
  const markup = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Page Title</title>
      </head>
      <body>
        <h1>Hello, World!</h1>
        <p>Just a simple HTML file.</p>
        <div id="locationDisplay">
          Where would you click first?
        </div>
      </body>
    </html>
  `;

  const dom = new JSDOM(markup);
  const document = dom.window.document;

  const mousedown$ = fromEvent<MouseEvent>(document, "mousedown");
  const mouseup$ = fromEvent<MouseEvent>(document, "mouseup");
  const mousemove$ = fromEvent<MouseEvent>(document, "mousemove");

  mousedown$
    .pipe(
      mergeMap(() => {
        return mousemove$.pipe(
          map((e) => ({
            x: e.clientX,
            y: e.clientY,
          })),
          takeUntil(mouseup$),
        );
      }),
    )
    .subscribe((position) => {
      console.log(`Mouse moved to: (${position.x}, ${position.y})`);
    });

  // Simulate the events
  const eventInit: MouseEventInit = { clientX: 100, clientY: 200 };

  const mousedownEvent = new dom.window.MouseEvent("mousedown", eventInit);
  document.dispatchEvent(mousedownEvent);

  const mousemoveEvent = new dom.window.MouseEvent("mousemove", {
    clientX: 150,
    clientY: 250,
  });
  document.dispatchEvent(mousemoveEvent);

  const mouseupEvent = new dom.window.MouseEvent("mouseup", eventInit);
  document.dispatchEvent(mouseupEvent);
}

/* Output:
Mouse moved to: (150, 250)
*/
