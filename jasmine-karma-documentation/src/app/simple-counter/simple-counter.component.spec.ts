import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCounterComponent } from './simple-counter.component';
import { By } from '@angular/platform-browser';

describe('SimpleCounterComponent', () => {
  let component: SimpleCounterComponent;
  let fixture: ComponentFixture<SimpleCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the initial count', () => {
    component.count = 5;
    fixture.detectChanges();
    const countDisplay = fixture.debugElement.query(
      By.css('[data-test="count-display"]')
    ).nativeElement;
    expect(countDisplay.textContent).toBe('5');
  });

  it('should emit countChange on increment', () => {
    spyOn(component.countChange, 'emit');
    component.increment();
    expect(component.countChange.emit).toHaveBeenCalledWith(1);
  });
});
