import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValueComponent } from './input-value.component';

describe('InputValueComponent', () => {
  let component: InputValueComponent;
  let fixture: ComponentFixture<InputValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
