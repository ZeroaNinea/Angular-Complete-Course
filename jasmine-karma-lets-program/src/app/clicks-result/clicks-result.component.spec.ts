import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicksResultComponent } from './clicks-result.component';
import { provideRouter } from '@angular/router';

describe('ClicksResultComponent', () => {
  let component: ClicksResultComponent;
  let fixture: ComponentFixture<ClicksResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClicksResultComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ClicksResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit trackOtherUrl when onTrackOtherUrl is called', () => {
    spyOn(component.trackOtherUrl, 'emit');

    component.onTrackOtherUrl();

    expect(component.trackOtherUrl.emit).toHaveBeenCalled();
  });

  it('should have clicks input as required', () => {
    fixture.componentRef.setInput('clicks', 10);
    fixture.detectChanges();

    expect(component.clicks()).toBe(10);
  });
});
