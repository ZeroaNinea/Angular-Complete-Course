import { from, filter, interval } from "rxjs";

export function filterSpec1() {
  const source$ = from([1, 2, 3, 4, 5]);
  const example$ = source$.pipe(filter((num) => num % 2 === 0));

  example$.subscribe((val) => console.log(`Even number: ${val}`));
}

/* Output:
'Even number: 2'
'Even number: 4'
*/

export function filterSpec2() {
  const source$ = from([
    { name: "Joe", age: 31 },
    { name: "Bob", age: 25 },
  ]);

  const example$ = source$
    .pipe(filter((person) => person.age >= 30))
    .subscribe((val) => console.log(`Over 30: ${val.name}`));
}

/* Output:
'Over 30: Joe'
*/

export function filterSpec3() {
  const source$ = interval(1000);
  const example$ = source$.pipe(filter((num) => num > 5));

  example$.subscribe((val) => console.log(`Number greater than 5: ${val}`));
}

/* Output:
'Number greater than 5: 6'
'Number greater than 5: 7'
'Number greater than 5: 8'
'Number greater than 5: 9'
'Number greater than 5: 10'
'Number greater than 5: 11'
'Number greater than 5: 12'
...
*/
