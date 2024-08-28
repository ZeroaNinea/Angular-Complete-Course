import { of, concatMap, timeout, catchError, delay } from "rxjs";

export function timeoutSpec() {
  function makeRequest(timeToDelay: number) {
    return of("Request Complete!").pipe(delay(timeToDelay));
  }

  of(4000, 3000, 2000)
    .pipe(
      concatMap((duration) =>
        makeRequest(duration).pipe(
          timeout(2500),
          catchError((error) => of(`Request timed out after: ${duration}`)),
        ),
      ),
    )
    .subscribe((val) => console.log(val));
}

/* Output:
Request timed out after: 4000
Request timed out after: 3000
Request Complete!
*/
