import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountParentComponent } from './bank-account-parent.component';

describe('BankAccountParentComponent', () => {
  let component: BankAccountParentComponent;
  let fixture: ComponentFixture<BankAccountParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankAccountParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankAccountParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
