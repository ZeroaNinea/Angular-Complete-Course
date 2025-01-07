import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestViewProvidersComponent } from './test-view-providers.component';
import { ValueService } from '../services/value/value.service';
import { FakeValueService } from '../services/fake-value/fake-value.service';

describe('TestViewProvidersComponent Override', () => {
  let component: TestViewProvidersComponent;
  let fixture: ComponentFixture<TestViewProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestViewProvidersComponent],
    })
      .overrideComponent(TestViewProvidersComponent, {
        // remove: { viewProviders: [ValueService]},
        // add:    { viewProviders: [{ provide: ValueService, useClass: FakeValueService }]
        // },
        // Or replace them all (this component has only one viewProvider)
        set: {
          viewProviders: [
            { provide: ValueService, useClass: FakeValueService },
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TestViewProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should override TestViewProvidersComp's ValueService viewProvider", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(
      'injected value: faked service value'
    );
  });
});
