import { repeat, delay, of } from "rxjs";

export function repeatSpec() {
  const delayedThing = of("delayed value").pipe(delay(2000));

  delayedThing.pipe(repeat(3)).subscribe(console.log);
}

/* Output:
'delayed value'
'delayed value'
'delayed value'
*/
