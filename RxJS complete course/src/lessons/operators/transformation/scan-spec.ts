import {
  of,
  scan,
  Subject,
  interval,
  map,
  distinctUntilChanged,
  delay,
  repeat,
  mergeMap,
  Observer,
} from "rxjs";

export function scanSpec1() {
  const source$ = of(1, 2, 3);
  const example$ = source$
    .pipe(scan((acc, curr) => acc + curr, 0))
    .subscribe(console.log);
}

/* Output:
1
3
6
*/

export function scanSpec2() {
  const subject$ = new Subject();
  const example$ = subject$
    .pipe(scan((acc, curr) => Object.assign({}, acc, curr), {}))
    .subscribe((val) => console.log("Accumulated object:", val));

  subject$.next({ name: "Joe" });
  subject$.next({ age: 30 });
  subject$.next({ favoriteLanguage: "TypeScript" });
}

/* Output:
Accumulated object: { name: 'Joe' }
Accumulated object: { name: 'Joe', age: 30 }
Accumulated object: { name: 'Joe', age: 30, favoriteLanguage: 'TypeScript' }
*/

export function scanSpec3() {
  const scan$ = interval(1000)
    .pipe(
      scan((a: number[], c: number) => [...a, c], []),
      map((r) => r[Math.floor(Math.random() * r.length)]),
      distinctUntilChanged(),
    )
    .subscribe(console.log);
}

/* Output:
0
1
2
0
4
3
1
2
6
8
10
4
3
*/

export function scanSpec4() {
  const fakeRequest$ = of("response").pipe(delay(2000));

  interval(1000)
    .pipe(
      mergeMap((_) => fakeRequest$),
      scan((all: string[], current: string) => [...all, current], []),
    )
    .subscribe(console.log);
}

/* Output:
[ 'response' ]
[ 'response', 'response' ]
[ 'response', 'response', 'response' ]
[ 'response', 'response', 'response', 'response' ]
[ 'response', 'response', 'response', 'response', 'response' ]
...
*/
