import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeChildComponent } from './fake-child.component';

describe('FakeChildComponent', () => {
  let component: FakeChildComponent;
  let fixture: ComponentFixture<FakeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
