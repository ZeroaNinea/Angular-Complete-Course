import { of, interval, concatMapTo, delay, take } from "rxjs";

export function concatmaptoSpec1() {
  const sampleInterval$ = interval(500).pipe(take(5));
  const fakeRequest$ = of("Network request complete").pipe(delay(300));
  const example$ = sampleInterval$
    .pipe(concatMapTo(fakeRequest$))
    .subscribe(console.log);
}

/*
1. The `concatMapTo` function subscrubes to provided observable when previous completes, and then emits values.
*/

/* Output:
Network request complete
Network request complete
Network request complete
Network request complete
Network request complete
*/

export function concatmaptoSpec2() {
  const interval$ = interval(2000);
  const source$ = interval(1000).pipe(take(5));

  const example$ = interval$
    .pipe(
      concatMapTo(
        source$,
        (firstInterval, secondInterval) => `${firstInterval} ${secondInterval}`,
      ),
    )
    .subscribe(console.log);
}

/* Output:
0 0
0 1
0 2
0 3
0 4
1 0
1 1
1 2
1 3
1 4
2 0
2 1
2 2
2 3
2 4
3 0
3 1
3 2
3 3
3 4
*/
