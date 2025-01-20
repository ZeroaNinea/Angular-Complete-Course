import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-simple-counter',
  imports: [MatButtonModule],
  standalone: true,
  templateUrl: './simple-counter.component.html',
  styleUrl: './simple-counter.component.scss',
})
export class SimpleCounterComponent {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }
}
