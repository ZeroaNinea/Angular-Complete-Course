import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedsContentComponent } from './needs-content.component';

describe('NeedsContentComponent', () => {
  let component: NeedsContentComponent;
  let fixture: ComponentFixture<NeedsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeedsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeedsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
