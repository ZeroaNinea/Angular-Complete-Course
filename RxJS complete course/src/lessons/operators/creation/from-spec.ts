import { from } from "rxjs";

export function fromSpec1() {
  const arraySource$ = from([1, 2, 3, 4, 5]);

  arraySource$.subscribe(console.log);
}

/*
1. The `from` function turns any array, Promise or iterable into an Observable.
*/

/* Output:
1
2
3
4
5
*/

export function fromSpec2() {
  const promiseSource$ = from(
    new Promise((resolve) => resolve("Hello, World!")),
  );

  promiseSource$.subscribe((val) => console.log(val));
}

/* Output:
Hello, World!
*/

export function fromSpec3() {
  const map = new Map();

  map.set(1, "Hi");
  map.set(2, "Bye");

  const mapSource$ = from(map);

  mapSource$.subscribe((val) => console.log(val));
}

/* Output:
[1, 'Hi']
[2, 'Bye']
*/

export function fromSpec4() {
  const source$ = from("Hello, World!");

  source$.subscribe((val) => console.log(val));
}

/* Output:
H
e
l
l
o
,

W
o
r
l
d
!
*/
