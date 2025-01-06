import { TestBed } from '@angular/core/testing';

import { FakeValueService } from './fake-value.service';

describe('FakeValueService', () => {
  let service: FakeValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getValue should return "faked service value"', () => {
    expect(service.getValue()).toBe('faked service value');
  });
});
