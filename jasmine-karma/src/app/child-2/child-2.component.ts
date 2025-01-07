import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-2',
  imports: [],
  standalone: true,
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.scss',
})
export class Child2Component {
  @Input() text = '';
}
