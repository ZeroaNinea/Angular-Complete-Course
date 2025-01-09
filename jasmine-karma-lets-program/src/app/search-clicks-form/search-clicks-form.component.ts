import { Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-clicks-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './search-clicks-form.component.html',
  styleUrl: './search-clicks-form.component.scss',
})
export class SearchClicksFormComponent {
  shortenedUrl = model<string | null>(null);
  onSubmit = output<string | null>();

  onShortUrlSubmit() {
    this.onSubmit.emit(this.shortenedUrl());
  }
}
