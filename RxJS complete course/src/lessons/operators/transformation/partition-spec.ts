import { from, merge, map, Observable, catchError, of, Observer } from "rxjs";
import { partition } from "rxjs/operators";

export function partitionSpec1() {
  const source$ = from([1, 2, 3, 4, 5, 6]);

  const [evens, odds] = partition<number>((val: number) => val % 2 === 0)(
    source$ as Observable<number>,
  );

  const subscribe$ = merge(
    evens.pipe(map((val: number) => `Even: ${val}`)),
    odds.pipe(map((val: number) => `Odd: ${val}`)),
  ).subscribe((val: string) => console.log(val));
}

/*
1. The `partition` function splits one Observable into two based on provided predicate.
*/

/* Output:
'Even: 2'
'Even: 4'
'Even: 6'
'Odd: 1'
'Odd: 3'
'Odd: 5'
*/

export function partitionSpec2() {
  const source$ = from([1, 2, 3, 4, 5, 6]);

  const example$ = source$.pipe(
    map((val) => {
      if (val > 3) {
        throw `${val} greater than 3!`;
      }
      return { success: val };
    }),
    catchError((val) => of({ error: val })),
  );

  // const [success, error] = partition<any>((res: any) => res.success)(
  //   example$ as
  //     | Observable<{ success: number } | { error: any }>
  //     | Observable<number>,
  // );

  const [success, error] = partition(
    (res: { success?: number; error?: string }) => "success" in res,
  )(example$);

  const subscribe$ = merge(
    success.pipe(map((val) => `Success! ${val.success}`)),
    error.pipe(map((val) => `Error! ${val.error}`)),
  ).subscribe((val) => console.log(val));
}

/* Output:
'Success! 1'
'Success! 2'
'Success! 3'
'Error! 4 greater than 3!'
*/

export function partitionSpec3() {
  const source$ = from([1, 2, 3, 4, 5, 6]);

  const example$ = source$.pipe(
    map((val) => {
      if (val > 3) {
        throw `${val} greater than 3!`;
      }
      return { success: val };
    }),
    catchError((val) => of({ error: val })),
  );

  const [success, error] = partition(
    (res: { success?: number; error?: string }) => "success" in res,
  )(example$);

  const subscribe$ = merge(
    success.pipe(map((val) => `Seccess! ${val.success}`)),
    error.pipe(map((val) => `Error! ${val.error}`)),
  ).subscribe(console.log);
}

/* Output:
'Success! 1'
'Success! 2'
'Success! 3'
'Error! 4 greater than 3!'
*/
