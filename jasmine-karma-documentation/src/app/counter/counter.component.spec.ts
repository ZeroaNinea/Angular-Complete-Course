import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from './state/counter.state';
import {
  resetCounter,
  startCounter,
  stopCounter,
} from './state/counter.actions';
import { selectCount } from './state/counter.selector';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let store: MockStore;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent, MatButtonModule, MatCardModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch startCounter action on startCounter call', () => {
    // spyOn(store, 'dispatch');
    component.startCounter();
    expect(store.dispatch).toHaveBeenCalledWith(startCounter());
  });

  it('should dispatch stopCounter action on stopCounter call', () => {
    // spyOn(store, 'dispatch');
    component.stopCounter();
    expect(store.dispatch).toHaveBeenCalledWith(stopCounter());
  });

  it('should dispatch resetCounter action on resetCounter call', () => {
    // spyOn(store, 'dispatch');
    component.resetCounter();
    expect(store.dispatch).toHaveBeenCalledWith(resetCounter());
  });

  it('should select count from the store', () => {
    store.overrideSelector(selectCount, 5);
    component.count$.subscribe((count) => {
      expect(count).toBe(5);
    });
  });

  it('should select count from the store', fakeAsync(() => {
    spyOn(store, 'select').and.returnValue(of(42)); // Spies the select method from the store and returns `42` as a value.
    component.count$ = store.select(selectCount); // Uses the `selectCount` selector to return the value of the counter from the store.
    fixture.detectChanges(); // Detects the changes in the component.
    let displayedCount: string | null = null;
    fixture.whenStable().then(() => {
      const countElement = fixture.debugElement.query(
        By.css('[data-test="count-display"]') // Selects `[test-data=count-display]` from the template.
      );
      displayedCount = countElement.nativeElement.textContent.trim();
      expect(displayedCount).toBe('42'); // Assumes [data-test=count-display] shows the count value.
    });
    tick(); // Simulate passage of time.
  }));

  it('should dispatch startCounter on start button click', () => {
    const startButton = fixture.debugElement.query(
      By.css('[data-test="start-button"]')
    ); // Selects.
    startButton.triggerEventHandler('click', null); // Clicks.
    expect(store.dispatch).toHaveBeenCalledWith(startCounter()); // Checks if the method called the `startCounter` action.
  });

  it('should dispatch stopCounter on stop button click', () => {
    const stopButton = fixture.debugElement.query(
      By.css('[data-test="stop-button"]')
    );
    stopButton.triggerEventHandler('click', null);
    expect(store.dispatch).toHaveBeenCalledWith(stopCounter());
  });

  it('should dispatch resetCounter on reset button click', fakeAsync(() => {
    const resetButton = fixture.debugElement.query(
      By.css('[data-test="reset-button"]')
    );
    resetButton.triggerEventHandler('click', null);
    tick(500); // Simulates a dely just for testing.
    expect(store.dispatch).toHaveBeenCalledWith(resetCounter());
  }));
});
