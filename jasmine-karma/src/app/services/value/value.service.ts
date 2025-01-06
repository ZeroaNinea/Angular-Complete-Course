import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValueService {
  private value = 'real value';

  getValue(): string {
    return this.value;
  }

  getObservableValue(): Observable<string> {
    return of('observable value');
  }

  getPromiseValue(): Promise<string> {
    return Promise.resolve('promise value');
  }
}
