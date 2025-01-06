import { Injectable, Inject } from '@angular/core';
import { ValueService } from '../value/value.service';
import { FakeValueService } from '../fake-value/fake-value.service';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private valueService: ValueService) {}

  getValue(): any {
    return this.valueService.getValue();
  }
}
