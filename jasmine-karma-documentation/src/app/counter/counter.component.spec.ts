import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from './state/counter.state';
import {
  resetCounter,
  startCounter,
  stopCounter,
} from './state/counter.actions';
import { selectCount } from './state/counter.selector';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let store: MockStore;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch startCounter action on startCounter call', () => {
    spyOn(store, 'dispatch');
    component.startCounter();
    expect(store.dispatch).toHaveBeenCalledWith(startCounter());
  });

  it('should dispatch stopCounter action on stopCounter call', () => {
    spyOn(store, 'dispatch');
    component.stopCounter();
    expect(store.dispatch).toHaveBeenCalledWith(stopCounter());
  });

  it('should dispatch resetCounter action on resetCounter call', () => {
    spyOn(store, 'dispatch');
    component.resetCounter();
    expect(store.dispatch).toHaveBeenCalledWith(resetCounter());
  });

  it('should select count from the store', () => {
    store.overrideSelector(selectCount, 5);
    component.count$.subscribe((count) => {
      expect(count).toBe(5);
    });
  });
});
