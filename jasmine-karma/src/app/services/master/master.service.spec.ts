import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from '../value/value.service';
import { FakeValueService } from '../fake-value/fake-value.service';

describe('MasterService', () => {
  let service: MasterService;
  let valueServiceSpy: jasmine.SpyObj<ValueService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ValueService', ['getValue']);

    TestBed.configureTestingModule({
      providers: [MasterService, { provide: ValueService, useValue: spy }],
    });
    service = TestBed.inject(MasterService);
    valueServiceSpy = TestBed.inject(
      ValueService
    ) as jasmine.SpyObj<ValueService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value from the real service', () => {
    service = new MasterService(new ValueService());
    // console.log(service.getValue());

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
    valueServiceSpy.getValue.and.returnValue(stubValue); // Call the `getValue` method from the spy and pass it the `stubValue` value.

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

/*
### Spies can stub any function and track all calls to that function and all of its arguments.

1. `jasmine.createSpy(name, originalFunction)`:
- `name` (optional) — the name of the spy.
- `originalFunction` (optional) — the function which is to behave like the real implementation.

2. `jasmine.createSpyObj(baseName, methodNames)`:
- `baseName` (optional) — common name for the spies.
- `methodNames` (optional) — the names of the spy methods as an array of strings or as the properties of the object whose values are their respective return values.

3. `withContext(message)`:
- Explanation: Add some context to be included in matcher failures for an expectation, so that it can be more easily distinguished from similar expectations.
- `message` — context message.

4. `spy.getValue.calls.mostRecent()`:
- Explanation: Get the most recent invocation of this spy.

5. `spy.getValue.calls.count()`:
- Explanation: Get the number of invocations of this spy.
*/
