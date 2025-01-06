import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from '../value/value.service';
import { FakeValueService } from '../fake-value/fake-value.service';

describe('MasterService', () => {
  let service: MasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value from the real service', () => {
    service = new MasterService(new ValueService());
    console.log(service.getValue());

    expect(service.getValue()).toBe('real value');
  });

  it('#getValue should return faked value from a fakeService', () => {
    service = new MasterService(
      new FakeValueService() as unknown as ValueService
    );
    expect(service.getValue()).toBe('faked service value');
  });

  it('#getValue should return faked value from a fake object', () => {
    const fake = { getValue: () => 'fake value' };
    service = new MasterService(fake as ValueService);
    expect(service.getValue()).toBe('fake value');
  });

  it('#getValue should return stubbed value from a spy', () => {
    // Create `getValue` spy on an object representing the `ValueService`.
    const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);

    // Set the value to return when the `getValue` spy is called.
    const stubValue = 'stub value';
    valueServiceSpy.getValue.and.returnValue(stubValue);

    service = new MasterService(valueServiceSpy);

    expect(service.getValue())
      .withContext('service returned stub value')
      .toBe(stubValue);
    expect(valueServiceSpy.getValue.calls.count())
      .withContext('spy method was called once')
      .toBe(1);
    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(
      stubValue
    );
  });
});
