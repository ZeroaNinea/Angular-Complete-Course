import { JSDOM } from "jsdom";

import { interval, bufferToggle, Observer, fromEvent } from "rxjs";

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

export function buffertoggelSpec1() {
  const sourceInterval$ = interval(1000);
  const startInterval$ = interval(5000);
  const closingInterval$ = (val: string | number) => {
    console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`);
    return interval(3000);
  };

  const bufferToggleInterval$ = sourceInterval$
    .pipe(bufferToggle(startInterval$, closingInterval$))
    .subscribe((val) => console.log("Emitted Buffer:", val));
}

/*
1. The `bufferToggle` function toggles on to catch emitted values from source, toggle off to emit buffered values as array.
*/

/* Output:
Value 0 emitted, starting buffer! Closing in 3s!
Emitted Buffer: [ 4, 5, 6 ]
Value 1 emitted, starting buffer! Closing in 3s!
Emitted Buffer: [ 9, 10, 11 ]
Value 2 emitted, starting buffer! Closing in 3s!
Emitted Buffer: [ 14, 15, 16 ]
Value 3 emitted, starting buffer! Closing in 3s!
Emitted Buffer: [ 19, 20, 21 ]
Value 4 emitted, starting buffer! Closing in 3s!
Emitted Buffer: [ 24, 25, 26 ]
Value 5 emitted, starting buffer! Closing in 3s!
Emitted Buffer: [ 29, 30, 31 ]
Value 6 emitted, starting buffer! Closing in 3s!
Emitted Buffer: [ 34, 35, 36 ]
Value 7 emitted, starting buffer! Closing in 3s!
Emitted Buffer: [ 39, 40, 41 ]
Value 8 emitted, starting buffer! Closing in 3s!
Emitted Buffer: [ 44, 45, 46 ]
Value 9 emitted, starting buffer! Closing in 3s!
Emitted Buffer: [ 49, 50, 51 ]
*/

export function buffertoggelSpec2() {
  fromEvent<MouseEvent>(document, "mousemove")
    .pipe(
      bufferToggle(fromEvent<MouseEvent>(document, "mousedown"), () =>
        fromEvent<MouseEvent>(document, "mouseup"),
      ),
    )
    .subscribe((bufferedEvents) => {
      console.log(
        bufferedEvents.map((e) => ({
          x: e.clientX,
          y: e.clientY,
        })),
      );
    });

  const eventInit = {
    bubbles: true,
    cancelable: true,
    view: dom.window as unknown as Window,
  };

  const mousedownEvent = new dom.window.MouseEvent("mousedown", eventInit);
  const mousemoveEvent = new dom.window.MouseEvent("mousemove", {
    ...eventInit,
    clientX: 100,
    clientY: 200,
  });
  const mouseupEvent = new dom.window.MouseEvent("mouseup", eventInit);

  document.dispatchEvent(mousedownEvent);
  document.dispatchEvent(mousemoveEvent);
  document.dispatchEvent(mousedownEvent);
  document.dispatchEvent(mousemoveEvent);
}
