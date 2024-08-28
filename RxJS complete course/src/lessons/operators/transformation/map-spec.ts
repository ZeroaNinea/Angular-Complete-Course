import { from, map } from "rxjs";

export function mapSpec1() {
  const source$ = from([1, 2, 3, 4, 5]);
  const example$ = source$.pipe(map((val) => val + 10)).subscribe(console.log);
}

/* Output:
11
12
13
14
15
*/

export function mapSpec2() {
  const source$ = from([
    { name: "Joe", age: 30 },
    { name: "Frank", age: 20 },
    { name: "Ryan", age: 50 },
  ]);

  const example$ = source$.pipe(map(({ name }) => name)).subscribe(console.log);
}

/* Output:
Joe
Frank
Ryan
*/
