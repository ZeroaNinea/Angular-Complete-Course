import { JSDOM } from "jsdom";

import { interval, mapTo, fromEvent } from "rxjs";

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

export function maptoSpec1() {
  const source$ = interval(2000);
  const example$ = source$.pipe(mapTo("HELLO, WORLD!")).subscribe(console.log);
}

/* Output:
'HELLO, WORLD!'
'HELLO, WORLD!'
'HELLO, WORLD!'
'HELLO, WORLD!'
'HELLO, WORLD!'
'HELLO, WORLD!'
'HELLO, WORLD!'
'HELLO, WORLD!'
'HELLO, WORLD!'
'HELLO, WORLD!'
'HELLO, WORLD!'
'HELLO, WORLD!'
...
*/

export function maptoSpec2() {
  const source = fromEvent(document!, "click");
  const example = source.pipe(mapTo("GOODBYE WORLD!")).subscribe(console.log);

  const event = new dom.window.MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: dom.window as unknown as Window,
  });

  document.dispatchEvent(event);
}

/* Output:
'GOODBYE WORLD!'
*/
