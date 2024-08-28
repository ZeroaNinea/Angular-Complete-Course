import { endWith } from "rxjs/operators";
import { of } from "rxjs";

export function endwithSpec1() {
  const source$ = of("Hello", "Friend", "Goodbye");

  source$.pipe(endWith("Friend")).subscribe((val) => console.log(val));
}

/*
1. The `endsWith` function appends the value passed to it as an argument to the end of the Observable.
*/

/* Output:
Hello
Friend
Goodbye
Friend
*/

export function endwithSpec2() {
  const source$ = of("Hello", "Friend");

  source$
    .pipe(endWith("Goodbye", "Friend"))
    .subscribe((val) => console.log(val));
}

/*
1. Multiple arguments can also be passed to the `endWith` function.
*/

/* Output:
Hello
Friend
Goodbye
Friend
*/
