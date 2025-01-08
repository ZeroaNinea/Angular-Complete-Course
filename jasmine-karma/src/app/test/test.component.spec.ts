import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { ValueService } from '../services/value/value.service';
import { TestProvidersComponent } from '../test-providers/test-providers.component';
import { FakeValueService } from '../services/fake-value/fake-value.service';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent, TestProvidersComponent],
      providers: [ValueService],
    })
      .overrideComponent(TestComponent, {
        set: { providers: [{ provide: ValueService, useValue: {} }] },
      })
      .overrideComponent(TestProvidersComponent, {
        set: {
          providers: [{ provide: ValueService, useClass: FakeValueService }],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("injected provider should not be same as component's provider", () => {
    // // TestComponent is parent of TestProvidersComponent
    // @Component({
    //   template: '<my-service-comp></my-service-comp>',
    //   imports: [TestProvidersComponent],
    // })
    // class TestComponent {}

    // 3 levels of ValueService provider: module, TestComponent, TestProvidersComponent
    // const fixture = TestBed.configureTestingModule({
    //   imports: [TestComponent, TestProvidersComponent],
    //   providers: [ValueService],
    // })
    //   .overrideComponent(TestComponent, {
    //     set: { providers: [{ provide: ValueService, useValue: {} }] },
    //   })
    //   .overrideComponent(TestProvidersComponent, {
    //     set: {
    //       providers: [{ provide: ValueService, useClass: FakeValueService }],
    //     },
    //   })
    //   .createComponent(TestComponent);

    let testBedProvider!: ValueService;

    // `inject` uses TestBed's injector
    inject([ValueService], (s: ValueService) => (testBedProvider = s))();
    const tcProvider = fixture.debugElement.injector.get(
      ValueService
    ) as ValueService;
    const tpcProvider = fixture.debugElement.children[0].injector.get(
      ValueService
    ) as unknown as FakeValueService;

    expect(testBedProvider)
      .withContext('testBed/tc not same providers')
      .not.toBe(tcProvider);
    expect(testBedProvider)
      .withContext('testBed/tpc not same providers')
      .not.toBe(tpcProvider as any);

    expect(testBedProvider instanceof ValueService)
      .withContext('testBedProvider is ValueService')
      .toBe(true);
    expect(tcProvider)
      .withContext('tcProvider is {}')
      .toEqual({} as ValueService);
    expect(tpcProvider instanceof FakeValueService)
      .withContext('tpcProvider is FakeValueService')
      .toBe(false);
  });
});
