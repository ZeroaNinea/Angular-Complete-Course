import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestViewProvidersComponent } from './test-view-providers.component';

describe('TestViewProvidersComponent', () => {
  let component: TestViewProvidersComponent;
  let fixture: ComponentFixture<TestViewProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestViewProvidersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestViewProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
