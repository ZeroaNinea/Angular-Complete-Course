import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestProvidersComponent } from './test-providers.component';

describe('TestProvidersComponent', () => {
  let component: TestProvidersComponent;
  let fixture: ComponentFixture<TestProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestProvidersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
