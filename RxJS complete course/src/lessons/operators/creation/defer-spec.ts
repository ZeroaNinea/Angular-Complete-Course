import { defer, of, timer, merge } from "rxjs";
import { switchMap } from "rxjs/operators";

export function deferSpec() {
  const s1$ = of(new Date());
  const s2$ = defer(() => of(new Date()));

  console.log(new Date());

  timer(2000)
    .pipe(switchMap((_) => merge(s1$, s2$)))
    .subscribe(console.log);
}

/*
1. The `defer` function creates an Observable with given subscription function.
*/

/*
This code emits current date.
*/
