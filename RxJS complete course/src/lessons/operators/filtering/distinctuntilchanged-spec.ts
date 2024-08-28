import { from, distinctUntilChanged } from "rxjs";

export function distinctuntilchangedSpec1() {
  const source$ = from([1, 1, 2, 2, 3, 3]);

  source$.pipe(distinctUntilChanged()).subscribe(console.log);
}

/*
1. The `distinctUntilChanged` function only emits when the current value is different than the last.
*/

/* Output:
1
2
3
*/

export function distinctuntilchangedSpec2() {
  const sampleObject = { name: "Test" };

  const source$ = from([sampleObject, sampleObject, sampleObject]);

  source$.pipe(distinctUntilChanged()).subscribe(console.log);
}

/* Output:
{ name: 'Test' }
*/

export function distinctuntilchangedSpec3() {
  const source$ = from([
    { name: "Brian" },
    { name: "Joe" },
    { name: "Joe" },
    { name: "Sue" },
  ]);

  source$
    .pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
    .subscribe(console.log);
}

/* Output:
{ name: 'Brian' }
{ name: 'Joe' }
{ name: 'Sue' }
*/
