import { JSDOM } from "jsdom";
import fetch from "cross-fetch";

import {
  fromEvent,
  of,
  mergeMap,
  delay,
  Observable,
  take,
  interval,
} from "rxjs";
import { ajax } from "rxjs/ajax";

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
        Click anywhere to get the location!
      </div>
    </body>
  </html>
`;

const dom = new JSDOM(markup);
const document = dom.window.document;

export function mergemapSpec1() {
  const saveLocation = (location: {
    x: number;
    y: number;
    timestamp: number;
  }) => {
    return of(location).pipe(delay(500));
  };

  const click$ = fromEvent<MouseEvent>(document, "click");

  click$
    .pipe(
      mergeMap((e) => {
        return saveLocation({
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now(),
        });
      }),
    )
    .subscribe((val) => console.log("Saved!", val));

  const event = new dom.window.MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: dom.window as unknown as Window,
  });

  document.dispatchEvent(event);
}

/* Output:
'Saved!' { x: 0, y: 0, timestamp: 1723934127846 }
*/

export function mergemapSpec2() {
  const API_URL = "https://jsonplaceholder.typicode.com/todos/1";

  const click$ = fromEvent(document, "click");

  // click$.pipe(mergeMap(() => ajax.getJSON(API_URL))).subscribe(console.log);
  click$
    .pipe(mergeMap(() => fetch(API_URL).then((response) => response.json())))
    .subscribe(console.log);

  const event = new dom.window.MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: dom.window as unknown as Window,
  });

  document.dispatchEvent(event);
}

/* Output:
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
*/

export function mergemapSpec3() {
  const myPromise = (val: string): Promise<string> =>
    new Promise((resolve) => resolve(`${val} World From Promise!`));

  const source$ = of("Hello");

  source$.pipe(mergeMap((val) => myPromise(val))).subscribe(console.log);
}

/* Output:
'Hello World From Promise!'
*/

export function mergemapSpec4() {
  const myPromise = (val: string) =>
    new Promise((resolve) => resolve(`${val} World From Promise!`));

  const source$ = of("Hello");

  source$
    .pipe(
      mergeMap(
        (val) => myPromise(val),
        (valueFromSource, valueFromPromise) => {
          return `Source: ${valueFromSource}, Promise: ${valueFromPromise}`;
        },
      ),
    )
    .subscribe((val) => console.log(val));
}

/* Output:
'Source: Hello, Promise: Hello World From Promise!'
*/

export function mergemapSpec5() {
  const source$ = interval(1000);

  source$
    .pipe(
      mergeMap(
        (val) => interval(5000).pipe(take(2)),
        (oVal, iVal, oIndex, iIndex) => [oIndex, oVal, iIndex, iVal],
        2,
      ),
    )
    .subscribe(console.log);
}

/* Output:
[ 0, 0, 0, 0 ]
[ 1, 1, 0, 0 ]
[ 0, 0, 1, 1 ]
[ 1, 1, 1, 1 ]
[ 2, 2, 0, 0 ]
[ 3, 3, 0, 0 ]
[ 2, 2, 1, 1 ]
[ 3, 3, 1, 1 ]
[ 4, 4, 0, 0 ]
[ 5, 5, 0, 0 ]
[ 4, 4, 1, 1 ]
[ 5, 5, 1, 1 ]
...
*/
