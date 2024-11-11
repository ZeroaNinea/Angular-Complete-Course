import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-elevation',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './elevation.component.html',
  styleUrl: './elevation.component.scss',
})
export class ElevationComponent {
  isActive: boolean = false;
}
