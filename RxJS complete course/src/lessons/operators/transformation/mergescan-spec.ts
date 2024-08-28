import { JSDOM } from "jsdom";

const markup = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Page Title</title>
    </head>
    <body>
      <h1>Hello, World!</h1>
      <p>Just a simple HTML file.</p>
      <div id="duration">
        Click anywhere to get the location!
      </div>
    </body>
  </html>
`;

const dom = new JSDOM(markup);
const document = dom.window.document;

import {
  fromEvent,
  interval,
  mergeScan,
  take,
  takeUntil,
  map,
  scan,
} from "rxjs";

export function mergescanSpec() {
  const durationElem = document.getElementById("duration");

  const mouseDown$ = fromEvent<MouseEvent>(document, "mousedown");
  const mouseUp$ = fromEvent<MouseEvent>(document, "mouseup");

  mouseDown$
    .pipe(
      mergeScan((acc: number, curr: MouseEvent) => {
        return interval(1000).pipe(
          scan((a, _) => ++a, 0),
          map((val: number) => val + acc),
          takeUntil(mouseUp$),
        );
      }, 0),
    )
    .subscribe((val: number) => (durationElem!.innerHTML = `${val}s`));

  const mouseDownEvent = new dom.window.MouseEvent("mousedown", {
    bubbles: true,
    cancelable: true,
    view: dom.window as unknown as Window,
  });

  const mouseUpEvent = new dom.window.MouseEvent("mouseup", {
    bubbles: true,
    cancelable: true,
    view: dom.window as unknown as Window,
  });

  document.dispatchEvent(mouseDownEvent);

  setTimeout(() => {
    document.dispatchEvent(mouseUpEvent);
  }, 3000);
}

/*
1. The `mergeScan` function accumulates value over time via merged Observables.
*/
