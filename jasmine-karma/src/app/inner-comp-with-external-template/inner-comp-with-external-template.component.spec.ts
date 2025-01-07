import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerCompWithExternalTemplateComponent } from './inner-comp-with-external-template.component';

describe('InnerCompWithExternalTemplateComponent', () => {
  let component: InnerCompWithExternalTemplateComponent;
  let fixture: ComponentFixture<InnerCompWithExternalTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerCompWithExternalTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerCompWithExternalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
