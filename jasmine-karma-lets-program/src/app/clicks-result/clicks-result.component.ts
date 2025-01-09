import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clicks-result',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './clicks-result.component.html',
  styleUrl: './clicks-result.component.scss',
})
export class ClicksResultComponent {
  trackOtherUrl = output();
  clicks = input.required<number>();

  onTrackOtherUrl() {
    this.trackOtherUrl.emit();
  }
}
