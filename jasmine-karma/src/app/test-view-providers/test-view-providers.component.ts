import { Component } from '@angular/core';
import { ValueService } from '../services/value/value.service';

@Component({
  selector: 'app-test-view-providers',
  imports: [],
  standalone: true,
  templateUrl: './test-view-providers.component.html',
  styleUrl: './test-view-providers.component.scss',
})
export class TestViewProvidersComponent {
  constructor(public valueService: ValueService) {}
}
