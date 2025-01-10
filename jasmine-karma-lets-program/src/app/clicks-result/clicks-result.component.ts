import { Component, Input, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-clicks-result',
  imports: [RouterLink, MatExpansionModule, MatButtonModule],
  standalone: true,
  templateUrl: './clicks-result.component.html',
  styleUrl: './clicks-result.component.scss',
})
export class ClicksResultComponent {
  trackOtherUrl = output();
  // clicks = input<number>();
  @Input() clicks!: number;

  onTrackOtherUrl() {
    this.trackOtherUrl.emit();
  }
}
