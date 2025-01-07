import { Component, ContentChildren } from '@angular/core';

@Component({
  selector: 'app-needs-content',
  imports: [],
  standalone: true,
  templateUrl: './needs-content.component.html',
  styleUrl: './needs-content.component.scss',
})
export class NeedsContentComponent {
  @ContentChildren('content') children: any;
}
