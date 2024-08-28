import { JSDOM } from "jsdom";

import { from, distinctUntilKeyChanged, pluck, fromEvent } from "rxjs";

export function distinctuntilkeychangedSpec1() {
  const source$ = from([
    { name: "Brian" },
    { name: "Joe" },
    { name: "Joe" },
    { name: "Sue" },
  ]);

  source$.pipe(distinctUntilKeyChanged("name")).subscribe(console.log);
}

/*
1. The `distinctUntilKeyChanged` function only emits when the specified key value has changed.
*/

/* Output:
{ name: 'Brian' }
{ name: 'Joe' }
{ name: 'Sue' }
*/

export function distinctuntilkeychangedSpec2() {
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

  const searchBox = document.getElementById("search");

  if (searchBox) {
    const keys$ = fromEvent<KeyboardEvent>(searchBox, "keyup").pipe(
      distinctUntilKeyChanged("code"),
      pluck("key"),
    );

    keys$.subscribe(console.log);

    const event1 = new dom.window.KeyboardEvent("keyup", {
      code: "KeyA",
      key: "a",
    });
    const event2 = new dom.window.KeyboardEvent("keyup", {
      code: "KeyB",
      key: "b",
    });
    const event3 = new dom.window.KeyboardEvent("keyup", {
      code: "KeyA",
      key: "a",
    });

    searchBox.dispatchEvent(event1);
    searchBox.dispatchEvent(event2);
    searchBox.dispatchEvent(event3);
  }
}

/* Output:
a
b
a
*/
