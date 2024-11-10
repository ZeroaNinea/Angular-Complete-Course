import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomFieldComponent } from './my-custom-field.component';

describe('MyCustomFieldComponent', () => {
  let component: MyCustomFieldComponent;
  let fixture: ComponentFixture<MyCustomFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCustomFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCustomFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
