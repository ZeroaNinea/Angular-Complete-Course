import { interval } from "rxjs";
import { publish, tap } from "rxjs/operators";

export function publishSpec() {
  const source$ = interval(1000);
  const example$ = publish()(
    source$.pipe(tap((_) => console.log("Do Something!"))),
  );

  const subscribe$ = example$.subscribe((val) =>
    console.log(`Subscriber One: ${val}`),
  );
  const subscribeTwo$ = example$.subscribe((val) =>
    console.log(`Subscriber Two: ${val}`),
  );

  setTimeout(() => {
    example$.connect();
  }, 5000);
}

/* Output:
Do Something!
Subscriber One: 0
Subscriber Two: 0
Do Something!
Subscriber One: 1
Subscriber Two: 1
Do Something!
Subscriber One: 2
Subscriber Two: 2
Do Something!
Subscriber One: 3
Subscriber Two: 3
Do Something!
Subscriber One: 4
Subscriber Two: 4
*/
