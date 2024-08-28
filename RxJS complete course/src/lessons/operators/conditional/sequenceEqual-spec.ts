import { of, from } from "rxjs";
import { sequenceEqual, switchMap } from "rxjs/operators";

export function sequenceequalSpec() {
  const expectedSequence = from([4, 5, 6]);

  of([1, 2, 3], [4, 5, 6], [7, 8, 9])
    .pipe(switchMap((arr) => from(arr).pipe(sequenceEqual(expectedSequence))))
    .subscribe(console.log);
}

/*
1. The `switchMap` function map to Observable, complete previous inner Observable, emit values.

2. The `SequenceEqual` function determine whether two Observables emit the same sequence of items.
*/

/* Output:
false
true
false
*/
