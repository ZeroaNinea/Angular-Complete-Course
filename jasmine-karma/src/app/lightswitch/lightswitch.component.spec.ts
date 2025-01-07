import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightswitchComponent } from './lightswitch.component';
import { By } from '@angular/platform-browser';

describe('LightswitchComponent', () => {
  let component: LightswitchComponent;
  let fixture: ComponentFixture<LightswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightswitchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LightswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should support clicking a button', () => {
    // const fixture = TestBed.createComponent(LightswitchComponent);
    const btn = fixture.debugElement.query(By.css('button'));
    const span = fixture.debugElement.query(By.css('span')).nativeElement;

    fixture.detectChanges();
    expect(span.textContent)
      .withContext('before click')
      .toMatch(/is off/i);

    btn.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(span.textContent).withContext('after click').toMatch(/is on/i);
  });
});
