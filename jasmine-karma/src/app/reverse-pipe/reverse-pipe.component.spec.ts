import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { ReversePipeComponent } from './reverse-pipe.component';
import { By } from '@angular/platform-browser';

describe('ReversePipeComponent', () => {
  let component: ReversePipeComponent;
  let fixture: ComponentFixture<ReversePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReversePipeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReversePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ReversePipeComp should reverse the input text', fakeAsync(() => {
    const inputText = 'the quick brown fox.';
    const expectedText = '.xof nworb kciuq eht';

    const fixture = TestBed.createComponent(ReversePipeComponent);
    fixture.detectChanges();

    const comp = fixture.componentInstance;
    const input = fixture.debugElement.query(By.css('input'))
      .nativeElement as HTMLInputElement;
    const span = fixture.debugElement.query(By.css('span'))
      .nativeElement as HTMLElement;

    // Simulate user entering new name in `input`.
    input.value = inputText;

    // Dispatch a DOM event so that Angular learns of input value change.
    // Then wait a tick while ngModel pushes input.box value to `comp.text`.
    // And Angular updates the output `span`.
    input.dispatchEvent(new Event('input'));
    tick();
    fixture.detectChanges();
    expect(span.textContent).withContext('output span').toBe(expectedText);
    expect(comp.text).withContext('component.text').toBe(inputText);
  }));
});
