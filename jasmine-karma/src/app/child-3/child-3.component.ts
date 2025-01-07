import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-3',
  imports: [],
  standalone: true,
  templateUrl: './child-3.component.html',
  styleUrl: './child-3.component.scss',
})
export class Child3Component {
  @Input() text = '';
}
