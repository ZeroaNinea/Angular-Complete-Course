import { empty } from "rxjs";

export function emptySpec() {
  const subscribe$ = empty().subscribe({
    next: () => console.log("Next"),
    complete: () => console.log("Complete!"),
  });
}
