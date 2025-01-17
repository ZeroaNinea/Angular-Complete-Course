import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'jasmine-karma-documentation' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('jasmine-karma-documentation');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, jasmine-karma-documentation');
  // });

  it('should handle asynchronous tasks correctly using flush', fakeAsync(() => {
    let isDone = false;
    setTimeout(() => {
      isDone = true;
    }, 1000);
    expect(isDone).toBe(false);
    flush(); // Flushes any pending microtasks and simulates the asynchronous passage of time for the timers in the `fakeAsync` zone by draining the macrotask queue until it is empty.
    expect(isDone).toBe(true);
  }));

  it('should use async/await for asynchronous tasks', async () => {
    const asyncResult = Promise.resolve('resolved');
    const result = await asyncResult;
    expect(result).toBe('resolved');
  });
});
