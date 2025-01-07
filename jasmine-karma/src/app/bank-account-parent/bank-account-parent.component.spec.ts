import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountParentComponent } from './bank-account-parent.component';
import { BankAccountComponent } from '../bank-account/bank-account.component';

describe('BankAccountParentComponent', () => {
  let component: BankAccountParentComponent;
  let fixture: ComponentFixture<BankAccountParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankAccountParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BankAccountParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('BankAccountComponent should set attributes, styles, classes, and properties', () => {
    const fixture = TestBed.createComponent(BankAccountParentComponent);
    fixture.detectChanges();
    const comp = fixture.componentInstance;

    // The only child is `debugElement` of the `BankAccount` component.
    const el = fixture.debugElement.children[0];
    const childComp = el.componentInstance as BankAccountComponent;
    expect(childComp).toEqual(jasmine.any(BankAccountComponent));

    expect(el.context)
      .withContext('context is the child component')
      .toBe(childComp);

    expect(el.attributes['account'])
      .withContext('account attribute')
      .toBe(childComp.id);

    expect(el.attributes['bank'])
      .withContext('bank attribute')
      .toBe(childComp.bank);
    expect(el.classes['closed']).withContext('closed class').toBe(true);

    expect(el.classes['open']).withContext('open class').toBeFalsy();
    expect(el.styles['color']).withContext('color style').toBe(comp.color);

    expect(el.styles['width'])
      .withContext('width style')
      .toBe(comp.width + 'px');
    // Removed on 12/02/2016 when ceased public discussion of the `Renderer`. Revive in future?
    // expect(el.properties['customProperty']).toBe(true, 'customProperty');
  });
});
