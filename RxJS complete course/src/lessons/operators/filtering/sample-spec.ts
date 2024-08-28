import { JSDOM } from "jsdom";

import { interval, sample, zip, from, fromEvent, merge, mapTo } from "rxjs";

export function sampleSpec1() {
  const source$ = interval(1000);
  const example$ = source$
    .pipe(sample(interval(2000)))
    .subscribe((val) => console.log(val));
}

/*
1. The `sample` function produces a sample from a source under a certian condition.
*/

/* Output:
0
2
4
6
8
0
2
4
6
8
*/

export function sampleSpec2() {
  const source$ = zip(from(["Joe", "Frank", "Bob"]), interval(2000));

  const example$ = source$
    .pipe(sample(interval(2500)))
    .subscribe((val) => console.log(val));
}

/* Output:
[ 'Joe', 0 ]
[ 'Frank', 1 ]
*/

export function sampleSpec3() {
  const markup = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Page Title</title>
      </head>
      <body>
        <h1>Hello, World!</h1>
        <p>Just a simple HTML file.</p>
        <input type="text" id="search" placeholder="Type something..." />
      </body>
    </html>
  `;

  const dom = new JSDOM(markup);
  const document = dom.window.document;

  const input = document.getElementById("search");

  if (input) {
    const listener = merge(
      fromEvent(document, "mousedown").pipe(mapTo(false)),
      fromEvent(document, "mousemove").pipe(mapTo(true)),
    )
      .pipe(sample(fromEvent(document, "mouseup")))
      .subscribe((isDragging) => {
        console.log("Were you dragging?", isDragging);
      });

    const event = new dom.window.MouseEvent("mousedown");
    input.dispatchEvent(event);

    const moveEvent = new dom.window.MouseEvent("mousemove");
    input.dispatchEvent(moveEvent);

    const upEvent = new dom.window.MouseEvent("mouseup");
    input.dispatchEvent(upEvent);
  } else {
    console.error("Element with id 'search' not found");
  }
}
