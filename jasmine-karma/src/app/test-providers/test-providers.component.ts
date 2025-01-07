import { Component } from '@angular/core';
import { ValueService } from '../services/value/value.service';

@Component({
  selector: 'app-test-providers',
  imports: [],
  standalone: true,
  templateUrl: './test-providers.component.html',
  styleUrl: './test-providers.component.scss',
})
export class TestProvidersComponent {
  constructor(public valueService: ValueService) {}
}
