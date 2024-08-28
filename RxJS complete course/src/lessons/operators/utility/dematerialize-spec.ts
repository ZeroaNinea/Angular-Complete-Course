import { from, Notification, dematerialize } from "rxjs";

export function dematerializeSpec() {
  const source$ = from([
    Notification.createNext("SUCCESS!"),
    Notification.createError("ERROR!"),
  ])
    .pipe(dematerialize())
    .subscribe({
      next: (val) => console.log(`NEXT VALUE: ${val}`),
      error: (val) => console.log(`ERROR VALUE: ${val}`),
    });
}

/*
1. The `dematerialize` function turns notification objects into notification values.
*/

/* Output:
'NEXT VALUE: SUCCESS!'
'ERROR VALUE: ERROR!'
*/
