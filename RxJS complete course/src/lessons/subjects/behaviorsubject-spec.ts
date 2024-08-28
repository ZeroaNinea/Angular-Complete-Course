import { BehaviorSubject } from "rxjs";

export function behaviorsubjectSpec() {
  const subject = new BehaviorSubject(123);

  subject.subscribe(console.log);
  subject.subscribe(console.log);

  subject.next(456);

  subject.subscribe(console.log);

  subject.next(789);
}

/*
1. The `BehaviorSubject` requires an initial value and emits the current value to new subscribers.
*/

/* Output:
123
123
456
456
456
789
789
789
*/
