import { JSDOM } from "jsdom";

import {
  fromEvent,
  of,
  mergeMap,
  delay,
  takeUntil,
  Observable,
  merge,
  mapTo,
} from "rxjs";

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

export function delaySpec1() {
  const mousedown$: Observable<MouseEvent> = fromEvent<MouseEvent>(
    document,
    "mousedown",
  );
  const mouseup$: Observable<MouseEvent> = fromEvent<MouseEvent>(
    document,
    "mouseup",
  );

  mousedown$
    .pipe(
      mergeMap((event: MouseEvent) =>
        of(event).pipe(delay(700), takeUntil(mouseup$)),
      ),
    )
    .subscribe((event: MouseEvent) => console.log("Long Press!", event));
}

export function delaySpec2() {
  const example$ = of(null);
  const message$ = merge(
    example$.pipe(mapTo("Hello,")),
    example$.pipe(mapTo("World!"), delay(1000)),
    example$.pipe(mapTo("Goodbye,"), delay(2000)),
    example$.pipe(mapTo("World!"), delay(3000)),
  ).subscribe(console.log);
}

/* Output:
'Hello,'
'World!'
'Goodbye,'
'World!'
*/
