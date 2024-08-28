import { JSDOM } from "jsdom";

import { of, take, interval, tap, fromEvent } from "rxjs";

export function takeSpec1() {
  const source$ = of(1, 2, 3, 4, 5);
  const example$ = source$.pipe(take(1)).subscribe(console.log);
}

/* Output:
1
*/

export function takeSpec2() {
  const interval$ = interval(1000);
  const example$ = interval$.pipe(take(5)).subscribe(console.log);
}

/* Output:
0
1
2
3
4
*/

export function takeSpec3() {
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

  const locationDisplay = document.getElementById("locationDisplay");

  if (locationDisplay) {
    const oneClickEvent$ = fromEvent<MouseEvent>(document, "click")
      .pipe(
        take(1),
        tap((event) => {
          locationDisplay.innerHTML = `Your first click was on location ${event.screenX}:${event.screenY}`;
        }),
      )
      .subscribe(console.log);
  }

  const clickEvent = new dom.window.MouseEvent("click", {
    screenX: 100,
    screenY: 200,
  });

  document.dispatchEvent(clickEvent);
}

/* Output:
MouseEvent { isTrusted: [Getter] }
*/
