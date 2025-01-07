import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IoParentComponent } from './io-parent.component';

describe('IoParentComponent', () => {
  let component: IoParentComponent;
  let fixture: ComponentFixture<IoParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IoParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
