import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIfParentComponent } from './my-if-parent.component';

describe('MyIfParentComponent', () => {
  let component: MyIfParentComponent;
  let fixture: ComponentFixture<MyIfParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyIfParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyIfParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
