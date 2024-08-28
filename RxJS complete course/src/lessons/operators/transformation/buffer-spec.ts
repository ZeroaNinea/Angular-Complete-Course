import { JSDOM } from "jsdom";

import { fromEvent, buffer, filter, throttleTime, interval } from "rxjs";

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

export function bufferSpec1() {
  const clicks$ = fromEvent<MouseEvent>(document, "click");

  clicks$
    .pipe(
      buffer(clicks$.pipe(throttleTime(250))),
      filter((clickArray: MouseEvent[]) => clickArray.length > 1),
    )
    .subscribe(() => console.log("Double Click!"));

  const event = new dom.window.MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: dom.window as unknown as Window,
  });

  document.dispatchEvent(event);
  document.dispatchEvent(event);
}

/*
1. The `buffer` function collects output values until provided observable emits, emit as array.
*/

/* Output:
'Double Click!'
*/

export function bufferSpec2() {
  const myInterval = interval(1000);
  const bufferBy$ = fromEvent<MouseEvent>(document, "click");

  const myBufferedInterval = myInterval.pipe(buffer(bufferBy$));
  const subscribe = myBufferedInterval.subscribe((val: number[]) =>
    console.log("Buffered Values:", val),
  );

  const event = new dom.window.MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: dom.window as unknown as Window,
  });

  setTimeout(() => {
    document.dispatchEvent(event);
  }, 2000);
}

/* Output:
'Buffered Values:' [ 0 ]
*/
