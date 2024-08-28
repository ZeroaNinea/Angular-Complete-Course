import { timer, windowTime, tap, mergeAll } from "rxjs";

export function windowtimeSpec() {
  const source = timer(0, 1000);
  const example = source.pipe(
    windowTime(3000),
    tap((_) => console.log("NEW WINDOW!")),
  );

  const subscribeTwo = example
    .pipe(mergeAll())
    .subscribe((val) => console.log(val));
}

/* Output:
0
1
2
'NEW WINDOW!'
3
4
5
'NEW WINDOW!'
...
*/
