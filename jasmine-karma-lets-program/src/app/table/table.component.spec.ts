import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { provideRouter } from '@angular/router';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set buttontext to Copied and selectedRow to to be copied no successfull copy', async () => {
    const sampleTextToCopy = 'Sample Text';
    spyOn(navigator.clipboard, 'writeText').and.returnValue(Promise.resolve());

    component.copyToClipboard(sampleTextToCopy);

    await navigator.clipboard.writeText(sampleTextToCopy);

    expect(component.selectedRow()).toBe(sampleTextToCopy);
    expect(component.buttonText()).toBe('Copied');
  });
});
