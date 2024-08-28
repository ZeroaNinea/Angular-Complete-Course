import { of, timer, debounce, interval } from "rxjs";

export function debounceSpec1() {
  const example$ = of("WAIT", "ONE", "SECOND", "Last will display.");
  const debouncedExample$ = example$.pipe(debounce(() => timer(1000)));

  debouncedExample$.subscribe((val) => console.log(val));
}

/*
1. The `debounce` function discards emitted values that take less than the specified time, based on selector function, between output.
*/

/* Output:
'Last will display.'
*/

export function debounceSpec2() {
  const interval$ = interval(1000);
  const debouncedInterval$ = interval$.pipe(
    debounce((val) => timer(val * 200)),
  );

  debouncedInterval$.subscribe((val) => console.log(`Example Two: ${val}`));
}

/* Output:
Example Two: 0
Example Two: 1
Example Two: 2
Example Two: 3
Example Two: 4
Example Two: 5
*/
