import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  name = 'John';
}
