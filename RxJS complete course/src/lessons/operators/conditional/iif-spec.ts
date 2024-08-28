import { iif, of, interval, fromEvent, pipe } from "rxjs";
import { mergeMap, map, throttleTime, filter } from "rxjs/operators";

export function iffSpec() {
  const r$ = of("R");
  const x$ = of("X");

  interval(1000)
    .pipe(mergeMap((v) => iif(() => v % 4 === 0, r$, x$)))
    .subscribe(console.log);
}

/*
1. The `iif` function is conditional operator. If `v % 4 === 0` emit `r$`, else emit `x$`.

2. The `throttleTime` function emits the first value, then ingores all values for specified duration.
*/
