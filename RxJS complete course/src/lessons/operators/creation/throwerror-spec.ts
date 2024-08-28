import { throwError } from "rxjs";

export function throwerrorSpec() {
  const source$ = throwError("This is an error!");

  source$.subscribe({
    next: (val) => console.log(val),
    complete: () => console.log("Complete!"),
    error: (val) => console.log(`Error: ${val}`),
  });
}

/* Output:
Error: This is an error!
*/
