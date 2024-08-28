import { interval, bufferTime } from "rxjs";

export function buffertimeSpec1() {
  const source$ = interval(500);
  const example$ = source$
    .pipe(bufferTime(2000))
    .subscribe((val) => console.log("Buffered with Time:", val));
}

/*
1. The `bufferTime` function collects emitted values until provided time has passed, emit as array.
*/

/* Output:
'Buffered with Time:' [ 0, 1, 2 ]
'Buffered with Time:' [ 3, 4, 5, 6 ]
'Buffered with Time:' [ 7, 8, 9, 10 ]
'Buffered with Time:' [ 11, 12, 13, 14 ]
'Buffered with Time:' [ 15, 16, 17, 18 ]
'Buffered with Time:' [ 19, 20, 21, 22 ]
'Buffered with Time:' [ 23, 24, 25, 26 ]
'Buffered with Time:' [ 27, 28, 29, 30 ]
'Buffered with Time:' [ 31, 32, 33, 34 ]
'Buffered with Time:' [ 35, 36, 37, 38 ]
'Buffered with Time:' [ 39, 40, 41, 42 ]
'Buffered with Time:' [ 43, 44, 45, 46 ]
'Buffered with Time:' [ 47, 48, 49, 50 ]
'Buffered with Time:' [ 51, 52, 53, 54 ]
'Buffered with Time:' [ 55, 56, 57, 58 ]
'Buffered with Time:' [ 59, 60, 61, 62 ]
'Buffered with Time:' [ 63, 64, 65, 66 ]
'Buffered with Time:' [ 67, 68, 69 ]
*/

export function buffertimeSpec2() {
  const source$ = interval(500);
  const example$ = source$
    .pipe(bufferTime(2000, 1000))
    .subscribe((val) => console.log("Start Buffer Every 1s:", val));
}

/* Output:
'Start Buffer Every 1s:' [ 0, 1, 2 ]
'Start Buffer Every 1s:' [ 1, 2, 3, 4 ]
'Start Buffer Every 1s:' [ 3, 4, 5, 6 ]
'Start Buffer Every 1s:' [ 5, 6, 7, 8 ]
'Start Buffer Every 1s:' [ 7, 8, 9, 10 ]
'Start Buffer Every 1s:' [ 9, 10, 11, 12 ]
'Start Buffer Every 1s:' [ 11, 12, 13, 14 ]
'Start Buffer Every 1s:' [ 13, 14, 15, 16 ]
'Start Buffer Every 1s:' [ 15, 16, 17, 18 ]
'Start Buffer Every 1s:' [ 17, 18, 19, 20 ]
'Start Buffer Every 1s:' [ 19, 20, 21, 22 ]
'Start Buffer Every 1s:' [ 21, 22, 23, 24 ]
'Start Buffer Every 1s:' [ 23, 24, 25, 26 ]
'Start Buffer Every 1s:' [ 25, 26, 27, 28 ]
'Start Buffer Every 1s:' [ 27, 28, 29, 30 ]
'Start Buffer Every 1s:' [ 29, 30, 31, 32 ]
'Start Buffer Every 1s:' [ 31, 32, 33, 34 ]
*/
