import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';

import { InputComponent } from './input.component';
import { By } from '@angular/platform-browser';
import { NgControl, NgModel } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should support entering text in input box (ngModel)', waitForAsync(() => {
    const expectedOrigName = 'John';
    const expectedNewName = 'Sally';

    // const fixture = TestBed.createComponent(InputComponent);
    fixture.detectChanges();

    const comp = fixture.componentInstance;
    const input = fixture.debugElement.query(By.css('input'))
      .nativeElement as HTMLInputElement;

    expect(comp.name)
      .withContext(`At start name should be ${expectedOrigName} `)
      .toBe(expectedOrigName);

    // Wait until ngModel binds `comp.name` to input box.
    fixture
      .whenStable()
      .then(() => {
        expect(input.value)
          .withContext(
            `After ngModel updates input box, input.value should be ${expectedOrigName} `
          )
          .toBe(expectedOrigName);

        // Simulate user entering new name in `input`.
        input.value = expectedNewName;

        // That change doesn't flow to the component immediately.
        expect(comp.name)
          .withContext(
            `comp.name should still be ${expectedOrigName} after value change, before binding happens`
          )
          .toBe(expectedOrigName);

        // Dispatch a DOM event so that Angular learns of input value change.
        // Then wait while ngModel pushes input.box value to comp.name.
        input.dispatchEvent(new Event('input'));

        return fixture.whenStable();
      })
      .then(() => {
        expect(comp.name)
          .withContext(
            `After ngModel updates the model, comp.name should be ${expectedNewName} `
          )
          .toBe(expectedNewName);
      });
  }));

  it('should support entering text in input box (ngModel) - fakeAsync', fakeAsync(() => {
    const expectedOrigName = 'John';
    const expectedNewName = 'Sally';

    const fixture = TestBed.createComponent(InputComponent);
    fixture.detectChanges();

    const comp = fixture.componentInstance;
    const input = fixture.debugElement.query(By.css('input'))
      .nativeElement as HTMLInputElement;

    expect(comp.name)
      .withContext(`At start name should be ${expectedOrigName} `)
      .toBe(expectedOrigName);

    // Wait until ngModel binds `comp.name` to `input` box.
    tick();
    expect(input.value)
      .withContext(
        `After ngModel updates input box, input.value should be ${expectedOrigName} `
      )
      .toBe(expectedOrigName);

    // Simulate user entering new name in `input`.
    input.value = expectedNewName;

    // That change doesn't flow to the component immediately.
    expect(comp.name)
      .withContext(
        `comp.name should still be ${expectedOrigName} after value change, before binding happens`
      )
      .toBe(expectedOrigName);

    // Dispatch a DOM event so that Angular learns of input value change.
    // Then wait a tick while ngModel pushes `input.box` value to `comp.name`.
    input.dispatchEvent(new Event('input'));
    tick();
    expect(comp.name)
      .withContext(
        `After ngModel updates the model, comp.name should be ${expectedNewName} `
      )
      .toBe(expectedNewName);
  }));

  it('can examine attached directives and listeners', () => {
    const fixture = TestBed.createComponent(InputComponent);
    fixture.detectChanges();

    const inputEl = fixture.debugElement.query(By.css('input'));

    expect(inputEl.providerTokens)
      .withContext('NgModel directive')
      .toContain(NgModel);

    const ngControl = inputEl.injector.get(NgControl);
    expect(ngControl)
      .withContext('NgControl directive')
      .toEqual(jasmine.any(NgControl));

    expect(inputEl.listeners.length)
      .withContext('several listeners attached')
      .toBeGreaterThan(2);
  });
});
