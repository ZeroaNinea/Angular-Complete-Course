import { JSDOM } from "jsdom";

import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

export function fromeventSpec() {
  const markup = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Page Title</title>
      </head>
      <body>

        <h1>Hello, World!</h1>
        <p>Just simple HTML file.</p>

      </body>
    </html>
  `;

  const dom = new JSDOM(markup);
  const document = dom.window.document;

  const source$ = fromEvent(document!, "click");
  const example$ = source$.pipe(
    map((event) => `Event time: ${event.timeStamp}`),
  );

  example$.subscribe((val) => console.log(val));

  // document.onclick();
  document.dispatchEvent(
    new (dom.window as unknown as Window).MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: dom.window as unknown as Window,
    }),
  );
}
