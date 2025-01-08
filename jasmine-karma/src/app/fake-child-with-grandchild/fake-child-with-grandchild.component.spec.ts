import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeChildWithGrandchildComponent } from './fake-child-with-grandchild.component';

describe('FakeChildWithGrandchildComponent', () => {
  let component: FakeChildWithGrandchildComponent;
  let fixture: ComponentFixture<FakeChildWithGrandchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeChildWithGrandchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeChildWithGrandchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
