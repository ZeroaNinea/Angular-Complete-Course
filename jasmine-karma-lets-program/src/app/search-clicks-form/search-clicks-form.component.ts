import { Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ClicksResultComponent } from '../clicks-result/clicks-result.component';

@Component({
  selector: 'app-search-clicks-form',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ClicksResultComponent,
  ],
  standalone: true,
  templateUrl: './search-clicks-form.component.html',
  styleUrl: './search-clicks-form.component.scss',
})
export class SearchClicksFormComponent {
  shortenedUrl = model<string | null>(null);
  onSubmit = output<string | null>();

  onShortUrlSubmit() {
    console.log(this.shortenedUrl());
    this.onSubmit.emit(this.shortenedUrl());
  }
}
