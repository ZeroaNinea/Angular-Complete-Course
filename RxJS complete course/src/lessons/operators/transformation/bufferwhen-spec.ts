import { interval, bufferWhen } from "rxjs";

export function bufferwhenSpec() {
  const oneSecondInterval$ = interval(1000);
  const fiveSecondInverval$ = () => interval(5000);
  const bufferWhenExample$ = oneSecondInterval$
    .pipe(bufferWhen(fiveSecondInverval$))
    .subscribe((val) => console.log(`Emitted Buffer:`, val));
}

/*
1. The `bufferWhen` function collects all values until closing selector emits, emits buffered values.
*/

/* Output:
Emitted Buffer: [ 0, 1, 2, 3 ]
Emitted Buffer: [ 4, 5, 6, 7, 8 ]
Emitted Buffer: [ 9, 10, 11, 12, 13 ]
Emitted Buffer: [ 14, 15, 16, 17, 18 ]
Emitted Buffer: [ 19, 20, 21, 22, 23 ]
Emitted Buffer: [ 24, 25, 26, 27, 28 ]
Emitted Buffer: [ 29, 30, 31, 32, 33 ]
Emitted Buffer: [ 34, 35, 36, 37, 38 ]
Emitted Buffer: [ 39, 40, 41, 42, 43 ]
Emitted Buffer: [ 44, 45, 46, 47, 48 ]
*/
