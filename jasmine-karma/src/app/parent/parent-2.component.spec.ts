import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { FakeChildComponent } from '../fake-child/fake-child.component';
import { Child1Component } from '../child-1/child-1.component';

describe('ParentComponent Override', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentComponent, FakeChildComponent],
    })
      .overrideComponent(ParentComponent, {
        set: {
          imports: [FakeChildComponent, Child1Component],
          template: `Parent(<app-fake-child></app-fake-child>)`,
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ParentComp should use Fake Child component', () => {
    const fixture = TestBed.createComponent(ParentComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Parent(Fake Child)');
  });
});
