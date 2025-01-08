import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellComponent } from './shell.component';
import { NeedsContentComponent } from '../needs-content/needs-content.component';
import { Child1Component } from '../child-1/child-1.component';
import { Child2Component } from '../child-2/child-2.component';
import { Child3Component } from '../child-3/child-3.component';

describe('ShellComponent Override', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ShellComponent,
        NeedsContentComponent,
        Child1Component,
        Child2Component,
        Child3Component,
      ],
    })
      .overrideComponent(ShellComponent, {
        set: {
          selector: 'test-shell',
          imports: [
            NeedsContentComponent,
            Child1Component,
            Child2Component,
            Child3Component,
          ],
          template: `
      <app-needs-content #nc>
        <app-child-1 #content text="My"></app-child-1>
        <app-child-2 #content text="dog"></app-child-2>
        <app-child-2 text="has"></app-child-2>
        <app-child-3 #content text="fleas"></app-child-3>
        <div #content>!</div>
      </app-needs-content>
      `,
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can access template local variables as references', () => {
    // NeedsContentComp is the child of ShellComp
    const el = fixture.debugElement.children[0];
    const comp = el.componentInstance;

    expect(comp.children.toArray().length)
      .withContext(
        'three different child components and an ElementRef with #content'
      )
      .toBe(4);

    expect(el.references['nc'])
      .withContext('#nc reference to component')
      .toBe(comp);

    // Filter for DebugElements with a #content reference
    const contentRefs = el.queryAll((de) => de.references['content']);
    expect(contentRefs.length)
      .withContext('elements w/ a #content reference')
      .toBe(4);
  });
});
