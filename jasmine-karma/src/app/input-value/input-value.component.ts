import { Component } from '@angular/core';

@Component({
  selector: 'app-input-value',
  imports: [],
  standalone: true,
  templateUrl: './input-value.component.html',
  styleUrl: './input-value.component.scss',
})
export class InputValueComponent {
  name = 'Sally';
}
