import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';
import { of } from 'rxjs';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueService);
  });

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
});
