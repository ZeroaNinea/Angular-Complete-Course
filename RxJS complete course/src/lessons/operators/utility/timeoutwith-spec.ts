import { of, timeoutWith, delay, concatMap } from "rxjs";

export function timeoutwithSpec() {
  const fakeRequest = (delayTime: number) =>
    of("!response!").pipe(delay(delayTime));
  const requestTimeoutLogger = of("logging request timeout");
  const timeoutThreshold = 1000;

  of(timeoutThreshold + 1, timeoutThreshold - 1, timeoutThreshold + 3)
    .pipe(
      concatMap((e) =>
        fakeRequest(e).pipe(
          timeoutWith(timeoutThreshold, requestTimeoutLogger),
        ),
      ),
    )
    .subscribe(console.log);
}

/* Output:
'logging request timeout'
'!response!'
'logging request timeout'
*/
