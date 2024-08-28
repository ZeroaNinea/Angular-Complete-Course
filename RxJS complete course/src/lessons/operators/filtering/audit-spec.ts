import { JSDOM } from "jsdom";

import { fromEvent, audit, interval } from "rxjs";

export function auditSpec() {
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

  const clicks$ = fromEvent(document!, "click");
  const result$ = clicks$.pipe(audit((ev) => interval(1000)));
  result$.subscribe((val) => console.log(val));

  document!.dispatchEvent(
    new dom.window.MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    }),
  );
}

/*
1. The `audit` function ignores for time based on provided Observable, then emit most recent vsalue.
*/

/* Output:
MouseEvent { isTrusted: [Getter] }
*/
