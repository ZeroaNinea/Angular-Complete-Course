import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';

import { DemoComponent } from './demo.component';

import { BankAccountComponent } from '../bank-account/bank-account.component';
import { BankAccountParentComponent } from '../bank-account-parent/bank-account-parent.component';
import { Child1Component } from '../child-1/child-1.component';
import { Child2Component } from '../child-2/child-2.component';
import { Child3Component } from '../child-3/child-3.component';
import { ExternalTemplateComponent } from '../external-template/external-template.component';
import { InnerCompWithExternalTemplateComponent } from '../inner-comp-with-external-template/inner-comp-with-external-template.component';
import { InputComponent } from '../input/input.component';
import { InputValueComponent } from '../input-value/input-value.component';
import { IoComponent } from '../io/io.component';
import { IoParentComponent } from '../io-parent/io-parent.component';
import { LightswitchComponent } from '../lightswitch/lightswitch.component';
import { NeedsContentComponent } from '../needs-content/needs-content.component';
import { ReversePipeComponent } from '../reverse-pipe/reverse-pipe.component';
import { MyIfParentComponent } from '../my-if-parent/my-if-parent.component';
import { MasterService } from '../services/master/master.service';
import { MyIfChild1Component } from '../my-if-child-1/my-if-child-1.component';
import { MyIfComponent } from '../my-if/my-if.component';
import { ParentComponent } from '../parent/parent.component';
import { ShellComponent } from '../shell/shell.component';
import { TestProvidersComponent } from '../test-providers/test-providers.component';
import { TestViewProvidersComponent } from '../test-view-providers/test-view-providers.component';
import { ValueService } from '../services/value/value.service';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;
  let service: ValueService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoComponent],
      providers: [ValueService],
    }).compileComponents();
    service = TestBed.inject(ValueService);

    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use ValueService', () => {
    service = TestBed.inject(ValueService);
    expect(service.getValue()).toBe('real value');
  });

  // it('can inject a default value when service is not provided', () => {
  //   // Skip this example as it demonstrates the impossibility of such injection.
  //   expect(TestBed.inject(NotProvided, null)).toBeNull();
  // });

  it('test should wait for ValueService.getPromiseValue', waitForAsync(() => {
    // Angular uses the `waitForAsync` instead of the `async` in tests.
    service
      .getPromiseValue()
      .then((value) => expect(value).toBe('promise value'));
  }));

  it('test should wait for ValueService.getObservableValue', waitForAsync(() => {
    service
      .getObservableValue()
      .subscribe((value) => expect(value).toBe('observable value'));
  }));

  it('test should wait for ValueService.getObservableDelayValue', (done: DoneFn) => {
    // The `done` function will be invoked when asynchronous work has been completed.
    service.getObservableDelayValue().subscribe((value) => {
      expect(value).toBe('observable delay value');
      done();
    });
  });

  it('should allow the use of fakeAsync', fakeAsync(() => {
    // The `fakeAsync` function declares asynchronous zone. The `tick` function simulates asynchronous code.
    let value: any;
    service.getPromiseValue().then((val: any) => (value = val));
    tick();
    expect(value).toBe('promise value');
  }));
});
