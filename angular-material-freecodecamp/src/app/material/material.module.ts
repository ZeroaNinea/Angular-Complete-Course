import { AfterViewInit, NgModule, OnInit, ViewChild } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {
  MatExpansionModule,
  MatExpansionPanel,
} from '@angular/material/expansion';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { map, Observable, startWith } from 'rxjs';

const MaterialComponents = [
  MatButtonModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  FormsModule,
  ReactiveFormsModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule implements AfterViewInit, OnInit {
  @ViewChild('panel1') panel1: MatExpansionPanel | undefined;
  @ViewChild('panel2') panel2: MatExpansionPanel | undefined;

  openPanel(panel: MatExpansionPanel) {
    panel?.open();
  }

  closePanel(panel: MatExpansionPanel) {
    panel?.close();
  }

  togglePanel(panel: MatExpansionPanel) {
    panel?.expanded ? panel?.close() : panel?.open();
  }

  checkPanelStatus(panel: MatExpansionPanel) {
    const isOpen = panel.expanded;
    console.log(isOpen ? 'The panel is open.' : 'The panel is closed.');
  }

  @ViewChild('tabRef') tabRef: MatTabGroup | undefined;
  selectedIndex: number = 0;

  ngAfterViewInit() {
    this.selectedIndex = this.tabRef?.selectedIndex ?? 0;
  }

  onTabChange(index: number) {
    this.selectedIndex = index;
  }

  selectedValue!: string;

  options: string[] = ['Angular', 'React', 'Vue'];
  objectOptions = [
    { name: 'Angular' },
    { name: 'Angular Material' },
    { name: 'React' },
    { name: 'Vue' },
  ];

  myControl = new FormControl();
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLocaleLowerCase().includes(filterValue)
    );
  }

  displayFn(subject: any) {
    return subject ? subject.name : undefined;
  }

  minDate: Date = new Date(2019, 3, 10);
  maxDate: Date = new Date();

  dateFilter = (date: Date | null): boolean => {
    const day: number = (date || new Date()).getDay();

    return day !== 0 && day !== 6;
  };
}
