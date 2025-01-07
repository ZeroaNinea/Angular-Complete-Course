import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1Component } from './child-1.component';
import { ExternalTemplateComponent } from '../external-template/external-template.component';

describe('Child1Component', () => {
  let component: Child1Component;
  let fixture: ComponentFixture<Child1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a component with inline template', () => {
    // const fixture = TestBed.createComponent(Child1Component);
    // fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Child'); // The `expect().toContain('Child')` method checks if the text content contains the word `'Child'`.
  });
});

/*
### `TestBed`: Configures and initializes environment for unit testing and provides methods for creating components and services in unit tests.
- `TestBed.configureTestingModule`: Defines imports, declarations and providers in `.spec.ts` files.
- `TestBed.createComponent()`: Creates an instance of the specified component.
- `fixture.detectChanges()`: Renders the component template after creation.
- `fixture.nativeElement`: Refers to the root DOM element of the component.
- `compiled.textContent`: Gets all the text within the element.
*/
