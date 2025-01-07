import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIfComponent } from './my-if.component';

describe('MyIfComponent', () => {
  let component: MyIfComponent;
  let fixture: ComponentFixture<MyIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyIfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should allow changing members of the component', () => {
    // const fixture = TestBed.createComponent(MyIfComponent);
    // fixture.detectChanges();

    let compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('MyIf()');

    fixture.componentInstance.showMore = true; // Show as "More" the other content in the HTML template.
    fixture.detectChanges();

    compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('MyIf(More)');
  });
});
