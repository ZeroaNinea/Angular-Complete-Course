import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeGrandchildComponent } from './fake-grandchild.component';

describe('FakeGrandchildComponent', () => {
  let component: FakeGrandchildComponent;
  let fixture: ComponentFixture<FakeGrandchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeGrandchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeGrandchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
