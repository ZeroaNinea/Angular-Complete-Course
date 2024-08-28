import { JSDOM } from "jsdom";

import {
  interval,
  fromEvent,
  switchMapTo,
  scan,
  startWith,
  takeWhile,
  finalize,
} from "rxjs";

const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <body>
      <div id="countdown">10</div>
    </body>
  </html>
`);

const document = dom.window.document;

export function switchmaptoSpec() {
  const COUNTDOWN_TIME = 10;

  // Reference
  const countdownElem = document.getElementById("countdown");

  // Streams
  const click$ = fromEvent<MouseEvent>(document, "click");
  const countdown$ = interval(1000).pipe(
    scan((acc) => --acc, COUNTDOWN_TIME),
    startWith(COUNTDOWN_TIME),
  );

  click$
    .pipe(
      switchMapTo(countdown$),
      takeWhile((val) => val >= 0),
      finalize(() => {
        if (countdownElem) {
          countdownElem.innerHTML = "We're done here!";
        }
      }),
    )
    .subscribe((val: number) => {
      if (countdownElem) {
        countdownElem.innerHTML = val.toString();
        console.log(val);
      }
    });

  // Simulate a click event
  const event = new dom.window.MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: dom.window as unknown as Window,
  });

  document.dispatchEvent(event);
}

/* Output:
10
9
8
7
6
5
4
3
2
1
0
*/
