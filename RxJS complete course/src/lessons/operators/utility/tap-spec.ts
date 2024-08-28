import { of, tap, map } from "rxjs";

export function tapSpec1() {
  const source$ = of(1, 2, 3, 4, 5);
  const example$ = source$
    .pipe(
      tap((val) => console.log(`BEFORE MAP: ${val}`)),
      map((val) => val + 10),
      tap((val) => console.log(`AFTER MAP: ${val}`)),
    )
    .subscribe(console.log);
}

/* Output:
BEFORE MAP: 1
AFTER MAP: 11
11
BEFORE MAP: 2
AFTER MAP: 12
12
BEFORE MAP: 3
AFTER MAP: 13
13
BEFORE MAP: 4
AFTER MAP: 14
14
BEFORE MAP: 5
AFTER MAP: 15
15
*/

export function tapSpec2() {
  const source$ = of(1, 2, 3, 4, 5);

  const example$ = source$
    .pipe(
      map((val) => val + 10),
      tap({
        next: (val) => {
          console.log("on next", val);
        },
        error: (error) => {
          console.log("on error", error.message);
        },
        complete: () => console.log("on complete"),
      }),
    )
    .subscribe((val) => console.log(val));
}

/* Output:
on next 11
11
on next 12
12
on next 13
13
on next 14
14
on next 15
15
on complete
*/
