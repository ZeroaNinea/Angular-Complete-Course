import { Component } from '@angular/core';
import { Child1Component } from '../child-1/child-1.component';

@Component({
  selector: 'app-parent',
  imports: [Child1Component],
  standalone: true,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {}
