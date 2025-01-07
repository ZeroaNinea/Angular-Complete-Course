import { Component } from '@angular/core';
import { NeedsContentComponent } from '../needs-content/needs-content.component';

@Component({
  selector: 'app-shell',
  imports: [NeedsContentComponent],
  standalone: true,
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {}
