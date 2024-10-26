import { AfterViewInit, NgModule, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
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
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule implements AfterViewInit {
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
}
