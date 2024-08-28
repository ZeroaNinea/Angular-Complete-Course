import { interval, timer, delayWhen } from "rxjs";

export function delaywhenSpec() {
  const message$ = interval(1000);
  const delayForFiveSeconds = () => timer(5000);
  const delayWhenExample = message$
    .pipe(delayWhen(delayForFiveSeconds))
    .subscribe(console.log);
}

/*
0
1
2
3
4
5
6
7
8
9
...
*/
