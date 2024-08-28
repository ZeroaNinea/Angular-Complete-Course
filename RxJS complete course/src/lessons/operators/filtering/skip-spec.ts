import { interval, skip, filter, from } from "rxjs";

export function skipSpec1() {
  const source$ = interval(1000);
  const example$ = source$.pipe(skip(5)).subscribe(console.log);
}

/*
1. The `skip` function skips the provided number of emitted values.
*/

/* Output:
5
6
7
8
9
10
11
12
13
14
*/

export function skipSpec2() {
  const numArray$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const skip$ = numArray$.pipe(skip(2)).subscribe(console.log);

  const filter$ = numArray$
    .pipe(filter((val, index) => index > 1))
    .subscribe(console.log);
}

/* Output:
3
4
5
6
7
8
9
10
3
4
5
6
7
8
9
10
*/
