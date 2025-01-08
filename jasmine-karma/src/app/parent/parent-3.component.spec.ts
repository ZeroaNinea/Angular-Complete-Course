import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { FakeChildComponent } from '../fake-child/fake-child.component';
import { Child1Component } from '../child-1/child-1.component';
import { FakeChildWithGrandchildComponent } from '../fake-child-with-grandchild/fake-child-with-grandchild.component';
import { FakeGrandchildComponent } from '../fake-grandchild/fake-grandchild.component';

describe('ParentComponent Override 2', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ParentComponent,
        FakeChildWithGrandchildComponent,
        FakeGrandchildComponent,
      ],
    })
      .overrideComponent(ParentComponent, {
        set: {
          imports: [FakeChildWithGrandchildComponent, FakeGrandchildComponent],
          template: `Parent(<app-fake-child-with-grandchild></app-fake-child-with-grandchild>)`,
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
    expect(compiled.textContent).toContain(
      'Parent(Fake Child(Fake Grandchild))'
    );
  });
});
