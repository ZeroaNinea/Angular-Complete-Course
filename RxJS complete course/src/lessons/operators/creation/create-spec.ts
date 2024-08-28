import { Observable, Observer } from "rxjs";

export function createSpec1() {
  const hello$: Observable<string> = Observable.create(function (
    observer: Observer<string>,
  ) {
    observer.next("Hello");
    observer.next("World");
    observer.complete();
  });

  hello$.subscribe((val: string) => console.log(val));

  // const hello$: Observable<string> = new Observable(
  //   (observer: Observer<string>) => {
  //     observer.next("Hello");
  //     observer.next("World");
  //     observer.complete();
  //   },
  // );

  // hello$.subscribe((val: string) => console.log(val));
}

/*
1. `Observable<string>` indicates that the observable emits values of type string.
2. `Observer<string>` specifies the observer type that will receive string values.
*/

/* Output:
Hello
World
*/

export function createSpec2() {
  const evenNumbers$ = new Observable(function (observer: Observer<number>) {
    let value: number = 0;
    const interval: NodeJS.Timeout = setInterval(() => {
      if (value % 2 === 0) {
        observer.next(value);
      }
      value++;
    }, 1000);

    return () => clearInterval(interval);
  });

  const subscribe$ = evenNumbers$.subscribe((val: number) => console.log(val));
  setTimeout(() => {
    subscribe$.unsubscribe();
  }, 10000);
}

/* Output:
0
2
4
6
8
*/
