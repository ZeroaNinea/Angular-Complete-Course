import { from, groupBy, mergeMap, toArray, of, zip } from "rxjs";

export function groupbySpec1() {
  const people = [
    { name: "Sue", age: 25 },
    { name: "Joe", age: 30 },
    { name: "Frank", age: 25 },
    { name: "Sarah", age: 35 },
  ];

  const source$ = from(people);
  const example$ = source$
    .pipe(
      groupBy((person) => person.age),
      mergeMap((group) => group.pipe(toArray())),
    )
    .subscribe(console.log);
}

/*
1. The `graoupBy` function groups into Observables based on provided value.

2. The `toArray` function collects all source emissions and emits them as an array when the source completes.
*/

/* Output:
[ { name: 'Sue', age: 25 }, { name: 'Frank', age: 25 } ]
[ { name: 'Joe', age: 30 } ]
[ { name: 'Sarah', age: 35 } ]
*/

export function groupbySpec2() {
  const people = [
    { name: "Sue", age: 25 },
    { name: "Joe", age: 30 },
    { name: "Frank", age: 25 },
    { name: "Sarah", age: 35 },
  ];

  from(people)
    .pipe(
      groupBy(
        (person) => person.age,
        (p) => p.name,
      ),
      mergeMap((group) => zip(of(group.key), group.pipe(toArray()))),
    )
    .subscribe(console.log);
}

/* Output:
[ 25, [ 'Sue', 'Frank' ] ]
[ 30, [ 'Joe' ] ]
[ 35, [ 'Sarah' ] ]
*/
