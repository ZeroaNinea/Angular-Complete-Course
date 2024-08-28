import {
  Subject,
  interval,
  ConnectableObservable,
  connectable,
  timer,
  ReplaySubject,
} from "rxjs";
import { take, tap, multicast, mapTo } from "rxjs/operators";

export function multicastSpec1() {
  const source$ = interval(2000).pipe(take(5));

  const example$ = source$.pipe(
    tap(() => console.log("Side Effect #1")),
    mapTo("Result!"),
  );

  // const multi$ = example$.pipe(
  //   multicast(() => new Subject()),
  // ) as ConnectableObservable<string>;
  const multi$ = connectable(example$, {
    connector: () => new Subject(),
  });

  const subscriberOne$ = multi$.subscribe((val) => console.log(val));
  const subscriberTwo$ = multi$.subscribe((val) => console.log(val));

  multi$.connect();
}

/*
Subject is a special type of Observable that allows values to be multicasted to many Observers. While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.

---------------------------------

1. The `multicast` function share source utilizing the provided Subject.

2. The `connectable` function creates an observable that multicasts once connect() is called on it.
*/

/* Output:
Side Effect #1
Result!
Result!
Side Effect #1
Result!
Result!
Side Effect #1
Result!
Result!
...
*/

export function multicastSpec2() {
  const source$ = interval(2000).pipe(take(5));

  const example$ = source$.pipe(
    tap((_) => console.log("Side Effect #2")),
    mapTo("Result Two!"),
  );

  // const multi$ = example$.pipe(
  //   multicast(() => new ReplaySubject(5)),
  // ) as ConnectableObservable<string>;

  const multi$ = connectable(example$, {
    connector: () => new ReplaySubject(5),
  });

  multi$.connect();

  setTimeout(() => {
    multi$.subscribe((val) => console.group(val));
  }, 5000);
}

/*
ReplaySubject is a variant of Subject that "replays" old values to new subscribers by emitting them when they first subscribe.
*/

/* Output:
Side Effect #2
Side Effect #2
Result Two!
  Result Two!
    Side Effect #2
    Result Two!
      Side Effect #2
      Result Two!
        Side Effect #2
        Result Two!
*/
