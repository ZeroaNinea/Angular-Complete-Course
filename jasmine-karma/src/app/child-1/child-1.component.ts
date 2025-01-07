import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-1',
  imports: [],
  standalone: true,
  templateUrl: './child-1.component.html',
  styleUrl: './child-1.component.scss',
})
export class Child1Component {
  @Input() text = 'Original';
  @Input() toHaveText = 'Child';
}
