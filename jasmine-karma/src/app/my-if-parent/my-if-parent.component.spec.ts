import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyIfParentComponent } from './my-if-parent.component';
import { FormsModule } from '@angular/forms';
import { MyIfChild1Component } from '../my-if-child-1/my-if-child-1.component';
import { By } from '@angular/platform-browser';
import { InputSignal } from '@angular/core';

describe('MyIfParentComponent', () => {
  let component: MyIfParentComponent;
  let fixture: ComponentFixture<MyIfParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [MyIfParentComponent, MyIfChild1Component],
      imports: [MyIfParentComponent, FormsModule, MyIfChild1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(MyIfParentComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should instantiate parent component', () => {
    expect(component)
      .withContext('parent component should exist')
      .not.toBeNull();
  });

  it('parent component OnInit should NOT be called before first detectChanges()', () => {
    expect(component.ngOnInitCalled).toBe(false);
  });

  it('parent component OnInit should be called after first detectChanges()', () => {
    fixture.detectChanges();
    expect(component.ngOnInitCalled).toBe(true);
  });

  it('child component should exist after OnInit', () => {
    fixture.detectChanges();

    const childFixture = TestBed.createComponent(MyIfChild1Component);
    const child = childFixture.componentInstance;
    // childFixture.detectChanges();

    expect(child instanceof MyIfChild1Component)
      .withContext('should create child')
      .toBe(true);
  });

  it("should have called child component's OnInit ", () => {
    fixture.detectChanges();

    const childFixture = TestBed.createComponent(MyIfChild1Component);
    const child = childFixture.componentInstance;
    childFixture.detectChanges();

    expect(child.ngOnInitCalled).toBe(true);
  });

  it('child component called OnChanges once', () => {
    component.parentValue = 'initial value';
    fixture.detectChanges();

    const childDebugElement = fixture.debugElement.query(
      By.directive(MyIfChild1Component)
    );
    expect(childDebugElement)
      .withContext('Child component should exist')
      .not.toBeNull();

    const child = childDebugElement.componentInstance as MyIfChild1Component;
    expect(child.ngOnChangesCounter).toBe(1);

    component.parentValue = 'new value';
    fixture.detectChanges();

    expect(child.ngOnChangesCounter).toBe(2);
  });

  it('changed parent value flows to child', () => {
    fixture.detectChanges();

    const childDebugElement = fixture.debugElement.query(
      By.directive(MyIfChild1Component)
    );
    expect(childDebugElement)
      .withContext('Child component should exist')
      .not.toBeNull();

    const child = childDebugElement.componentInstance as MyIfChild1Component;
    expect(child.ngOnChangesCounter).toBe(1);

    component.parentValue = 'foo';

    fixture.detectChanges();

    expect(child.ngOnChangesCounter)
      .withContext('expected 2 changes: initial value and changed value')
      .toBe(2);
    expect(child.childValue)
      .withContext('childValue should eq changed parent value')
      .toBe('foo');
  });

  it('changed child value flows to parent', waitForAsync(() => {
    fixture.detectChanges();

    const childDebugElement = fixture.debugElement.query(
      By.directive(MyIfChild1Component)
    );
    expect(childDebugElement)
      .withContext('Child component should exist')
      .not.toBeNull();

    const child = childDebugElement.componentInstance as MyIfChild1Component;
    expect(child.ngOnChangesCounter).toBe(1);

    child.childValue = 'bar';

    return new Promise<void>((resolve) => {
      // Wait one JS engine turn!
      setTimeout(() => resolve(), 0);
    }).then(() => {
      fixture.detectChanges();
      expect(child.ngOnChangesCounter)
        .withContext('expected 2 changes: initial value and changed value')
        .toBe(2);
      expect(component.parentValue)
        .withContext('parentValue should eq changed parent value')
        .toBe('bar');
    });
  }));
});
