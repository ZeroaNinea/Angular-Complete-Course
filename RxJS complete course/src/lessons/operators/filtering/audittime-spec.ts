import { JSDOM } from "jsdom";

import { fromEvent } from "rxjs";
import { auditTime } from "rxjs/operators";

export function audittimeSpec() {
  const markup = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Page Title</title>
      </head>
      <body>

        <h1>Hello, World!</h1>
        <p>Just a simple HTML file.</p>

      </body>
    </html>
  `;

  const dom = new JSDOM(markup);
  const document = dom.window.document;

  const source$ = fromEvent(document!, "click");
  const example$ = source$.pipe(auditTime(1000));
  example$.subscribe((val) => console.log("Clicked!"));

  document!.dispatchEvent(
    new dom.window.MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    }),
  );
}

/*
1. The `auditTime` function ignores for given time then emit most recent value.
*/

/* Output:
'Clicked!'
*/
