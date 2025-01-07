import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestProvidersComponent } from './test-providers.component';
import { ValueService } from '../services/value/value.service';
import { FakeValueService } from '../services/fake-value/fake-value.service';

describe('TestProvidersComponent', () => {
  let component: TestProvidersComponent;
  let fixture: ComponentFixture<TestProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestProvidersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it("should override TestProvidersComp's ValueService provider", () => {
  //   const fixture = TestBed.configureTestingModule({
  //     imports: [TestProvidersComponent],
  //   })
  //     .overrideComponent(TestProvidersComponent, {
  //       remove: { providers: [ValueService] },
  //       add: {
  //         providers: [{ provide: ValueService, useClass: FakeValueService }],
  //       },

  //       // Or replace them all (this component has only one provider)
  //       // set:    { providers: [{ provide: ValueService, useClass: FakeValueService }] },
  //     })
  //     .createComponent(TestProvidersComponent);

  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.textContent).toContain(
  //     'injected value: faked value',
  //     'text'
  //   );

  //   // Explore the providerTokens
  //   const tokens = fixture.debugElement.providerTokens;
  //   expect(tokens)
  //     .withContext('component ctor')
  //     .toContain(fixture.componentInstance.constructor);
  //   expect(tokens)
  //     .withContext('TestProvidersComp')
  //     .toContain(TestProvidersComponent);
  //   expect(tokens).withContext('ValueService').toContain(ValueService);
  // }); // Override again.
});
