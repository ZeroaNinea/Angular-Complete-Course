import { timer, combineLatestWith } from "rxjs";

const timerOne$ = timer(1000, 4000);
const timerTwo$ = timer(2000, 4000);
const timerThree$ = timer(3000, 4000);

export function combinelatestSpec1() {
  const combinedObservable = timerOne$
    .pipe(combineLatestWith(timerTwo$, timerThree$))
    .subscribe(([timerValOne, timerValTwo, timerValThree]) => {
      console.log(
        `
          Timer One Latest: ${timerValOne},
          Timer Two Latest: ${timerValTwo},
          Timer Three Latest: ${timerValThree}
        `,
      );
    });
}

/*
1. The `timer` function takes two parameters. The first parameter specifies after what amount of time to increment the emitting value starting from zero, and the second parameter specifies after what amount of time to repeat the same action.

2. The `combineLatestWith` function emits an Observable that contains, as an array, all the latest values in all Observables passed to the function as arguments.
*/

/* Output:
          Timer One Latest: 0,
          Timer Two Latest: 0,
          Timer Three Latest: 0

          Timer One Latest: 1,
          Timer Two Latest: 0,
          Timer Three Latest: 0

          Timer One Latest: 1,
          Timer Two Latest: 1,
          Timer Three Latest: 0

          Timer One Latest: 1,
          Timer Two Latest: 1,
          Timer Three Latest: 1

          Timer One Latest: 2,
          Timer Two Latest: 1,
          Timer Three Latest: 1
          ...
*/
