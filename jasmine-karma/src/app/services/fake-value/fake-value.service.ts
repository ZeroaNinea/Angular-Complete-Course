import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeValueService {
  private value = 'faked service value';

  getValue(): string {
    return this.value;
  }
}
