import { timer } from "rxjs";
import { tap, mapTo, share } from "rxjs/operators";

export function shareSpec() {
  const source$ = timer(1000);
  const example$ = source$.pipe(
    tap(() => console.log("***SIDE EFFECT***")),
    mapTo("***RESULT***"),
  );

  const subscribeOne$ = example$.subscribe((val) => console.log(val));
  const subscribeTwo$ = example$.subscribe((val) => console.log(val));

  const sharedExample$ = example$.pipe(share());

  const subscribeThree$ = sharedExample$.subscribe((val) => console.log(val));
  const subscribeFour$ = sharedExample$.subscribe((val) => console.log(val));
}

/*
1. The `share` function share source among multiple subscribers.
*/

/* Output:
***SIDE EFFECT***
***RESULT***
***SIDE EFFECT***
***RESULT***
***SIDE EFFECT***
***RESULT***
***RESULT***
*/
