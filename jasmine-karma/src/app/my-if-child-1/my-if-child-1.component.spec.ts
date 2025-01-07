import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIfChild1Component } from './my-if-child-1.component';

describe('MyIfChild1Component', () => {
  let component: MyIfChild1Component;
  let fixture: ComponentFixture<MyIfChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyIfChild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyIfChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
