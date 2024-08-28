import { AsyncSubject } from "rxjs";

export function asyncsubjectSpec() {
  const sub = new AsyncSubject();

  sub.subscribe(console.log);

  sub.next(123);

  sub.subscribe(console.log);

  sub.next(456);
  sub.complete();
}

/*
1. The `AsincSubject` emits its last value on completion.
*/

/* Output:
456
456
*/
