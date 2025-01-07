import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalTemplateComponent } from './external-template.component';

describe('ExternalTemplateComponent', () => {
  let component: ExternalTemplateComponent;
  let fixture: ComponentFixture<ExternalTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
