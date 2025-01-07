import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IoParentComponent } from './io-parent.component';
import { By } from '@angular/platform-browser';
import { IoComponent } from '../io/io.component';

describe('IoParentComponent', () => {
  let component: IoParentComponent;
  let fixture: ComponentFixture<IoParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IoParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a nested component bound to inputs/outputs', () => {
    // const fixture = TestBed.createComponent(IoParentComponent);
    // fixture.detectChanges();

    const heroes = fixture.debugElement.queryAll(By.css('.hero'));
    expect(heroes.length).withContext('has heroes').toBeGreaterThan(0);

    const comp = fixture.componentInstance;
    const hero = comp.heroes[0];

    const heroElement = heroes[0].query(By.css('p')); // Find the element.
    heroElement.nativeElement.dispatchEvent(new Event('click')); // Simulate the event.
    fixture.detectChanges();

    const selected = fixture.debugElement.query(By.css('p'));
    expect(selected.nativeElement.textContent).toContain(hero.name);
  });

  it('can access the instance variable of an `*ngFor` row component', () => {
    // const fixture = TestBed.createComponent(IoParentComponent);
    const comp = fixture.componentInstance;
    const heroName = comp.heroes[0].name; // First hero's name.

    fixture.detectChanges();
    const ngForRow = fixture.debugElement.query(By.directive(IoComponent)); // First hero ngForRow.

    const hero = ngForRow.context.hero; // The hero object passed into the row.
    expect(hero.name).withContext('ngRow.context.hero').toBe(heroName);

    const rowComp = ngForRow.componentInstance;
    // `jasmine.any` is an "instance-of-type" test.
    expect(rowComp)
      .withContext('component is IoComp')
      .toEqual(jasmine.any(IoComponent));
    expect(rowComp.hero.name).withContext('component.hero').toBe(heroName);
  });
});
