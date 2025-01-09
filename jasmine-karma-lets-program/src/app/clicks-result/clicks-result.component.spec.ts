import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicksResultComponent } from './clicks-result.component';

describe('ClicksResultComponent', () => {
  let component: ClicksResultComponent;
  let fixture: ComponentFixture<ClicksResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClicksResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClicksResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
