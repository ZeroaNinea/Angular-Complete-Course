import { timer, interval } from "rxjs";
import { map, tap, retryWhen, delayWhen, finalize } from "rxjs/operators";

export function retrywhenSpec() {
  const source$ = interval(1000);
  const example$ = source$.pipe(
    map((val) => {
      if (val > 5) {
        throw val;
      }
      return val;
    }),
    retryWhen((errors) =>
      errors.pipe(
        tap((val) => console.log(`Value ${val} was too high!`)),
        delayWhen((val) => timer(val * 1000)),
      ),
    ),
  );

  example$.subscribe((val) => console.log(val));
}

/*
1. The `retryWhen` function retry an Observable sequence on error based on custom criteria.

2. The `delayWhen` function delays the emission of items from the source Observable by a given time span determined by the emissions of another Observable.

3. The `finalize` function returns an Observable that mirrors the source Observable, but will call a specified function when the source terminates on complete or error. The specified function will also be called when the subscriber explicitly unsubscribes.
*/

/* Output:
0
1
2
3
4
5
"Value 6 was too high!"
...
*/
