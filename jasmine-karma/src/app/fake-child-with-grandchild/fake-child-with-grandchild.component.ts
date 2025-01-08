import { Component } from '@angular/core';
import { FakeGrandchildComponent } from '../fake-grandchild/fake-grandchild.component';

@Component({
  selector: 'app-fake-child-with-grandchild',
  imports: [FakeGrandchildComponent],
  standalone: true,
  templateUrl: './fake-child-with-grandchild.component.html',
  styleUrl: './fake-child-with-grandchild.component.scss',
})
export class FakeChildWithGrandchildComponent {}
