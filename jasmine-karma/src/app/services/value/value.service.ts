import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValueService {
  public value = 'real value';

  getValue(): string {
    return this.value;
  }

  setValue(value: string) {
    this.value = value;
  }

  getObservableValue(): Observable<string> {
    return of('observable value');
  }

  getObservableDelayValue() {
    return of('observable delay value').pipe(delay(10));
  }

  getPromiseValue(): Promise<string> {
    return Promise.resolve('promise value');
  }
}
