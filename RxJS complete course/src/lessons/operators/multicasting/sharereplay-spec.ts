import { Subject, ReplaySubject } from "rxjs";
import { pluck, share, shareReplay, tap } from "rxjs/operators";

export function sharereplaySpec() {
  const routeEnd$ = new Subject<{ data: any; url: string }>();
  const lastUrl$ = routeEnd$.pipe(
    tap((_) => console.log("executed")),
    pluck("url"),
    shareReplay(1),
  );

  const initialSubscriber$ = lastUrl$.subscribe(console.log);

  routeEnd$.next({ data: {}, url: "my-path" });

  const lateSubscriber$ = lastUrl$.subscribe(console.log);
}

/*
1. The `pluck` function maps each source value to its specified nested property.
*/

/* Output:
'executed'
'my-path'
'my-path'
*/
