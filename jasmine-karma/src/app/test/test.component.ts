import { Component } from '@angular/core';
import { TestProvidersComponent } from '../test-providers/test-providers.component';

@Component({
  selector: 'app-test',
  imports: [TestProvidersComponent],
  standalone: true,
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {}
