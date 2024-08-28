import { interval, throttleTime, asyncScheduler } from "rxjs";

export function throttletimeSpec1() {
  const source$ = interval(1000);
  const example$ = source$.pipe(throttleTime(5000)).subscribe(console.log);
}

/*
1. The `throttleTime` function emits first value then ignore for specified duration.
*/

/*
0
5
10
15
20
25
30
35
...
*/

export function throttletimeSpec2() {
  const source$ = interval(1000);
  const example$ = source$
    .pipe(throttleTime(5000, asyncScheduler, { trailing: true }))
    .subscribe(console.log);
}

/*
1. The `asyncScheduler` schedules tasks asynchronously, by putting them on the JavaScript event loop queue. It is best used to delay tasks in time or to schedule tasks repeating in intervals.
*/

/* Output:
0
4
9
14
19
24
29
34
39
44
49
...
*/
