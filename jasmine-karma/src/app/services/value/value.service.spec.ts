import { inject, TestBed, waitForAsync } from '@angular/core/testing';

import { ValueService } from './value.service';
import { of } from 'rxjs';

describe('ValueService', () => {
  let service: ValueService;
  let serviceValue: string;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ValueService] });
    service = TestBed.inject(ValueService);
  });

  beforeEach(waitForAsync(
    inject([ValueService], (service: ValueService) => {
      service.getPromiseValue().then((value) => (serviceValue = value));
    })
  ));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getValue should return "real value"', () => {
    expect(service.getValue()).toBe('real value');
  });

  it('#getObservableValue should return an Observable with "observable value"', () => {
    service
      .getObservableValue()
      .subscribe((data) => expect(data).toBe('observable value'));
  });

  it('#getPromiseValue should return a Promise with "promise value"', () => {
    service
      .getPromiseValue()
      .then((data) => expect(data).toBe('promise value'));
  });

  it('should use modified providers', inject(
    [ValueService],
    (service: ValueService) => {
      // Modify `ValueService`.
      service.setValue('value modified in beforeEach');
      expect(service.getValue()).toBe('value modified in beforeEach');
    }
  ));

  it('should use asynchronously modified value ... in synchronous test', () => {
    expect(serviceValue).toBe('promise value');
  });
});

/*
1. The `inject` function injects dependencies to tests.
*/
