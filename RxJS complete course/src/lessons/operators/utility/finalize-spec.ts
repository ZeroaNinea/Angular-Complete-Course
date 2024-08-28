import { interval, take, finalize } from "rxjs";

export function finalizeSpec() {
  const source$ = interval(1000);
  const example$ = source$
    .pipe(
      take(5),
      finalize(() => console.log("Sequence complete!")),
    )
    .subscribe(console.log);
}

/* Output:
0
1
2
3
4
'Sequence complete!'
*/
