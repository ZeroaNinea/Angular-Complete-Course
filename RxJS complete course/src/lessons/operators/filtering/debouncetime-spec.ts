import { JSDOM } from "jsdom";

import { debounceTime, map, fromEvent } from "rxjs";

export function debouncetimeSpec() {
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

  const searchBox = document.getElementById("search") as HTMLInputElement;

  const keyup$ = fromEvent<KeyboardEvent>(searchBox, "keyup");

  keyup$
    .pipe(
      map((event) => (event.target as HTMLInputElement).value),
      debounceTime(500),
    )
    .subscribe(console.log);

  // Simulate keyup events for testing
  searchBox.value = "Hello";
  searchBox.dispatchEvent(
    new dom.window.KeyboardEvent("keyup", { bubbles: true }),
  );

  searchBox.value = "Hello, World!";
  searchBox.dispatchEvent(
    new dom.window.KeyboardEvent("keyup", { bubbles: true }),
  );
}

/*
1. The `debounceTime` finction discard emitted values that take less than the specified time between output.
*/

/* Output:
'Hello, World!'
*/
