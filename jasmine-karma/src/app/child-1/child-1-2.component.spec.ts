import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1Component } from './child-1.component';

describe('Child1Component Override', () => {
  let component: Child1Component;
  let fixture: ComponentFixture<Child1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child1Component],
    })
      .overrideComponent(Child1Component, {
        set: { template: '<span>Fake</span>' },
      }) // Override component's content.
      .compileComponents();

    fixture = TestBed.createComponent(Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should override ChildComp's template", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Fake');
  });
});
