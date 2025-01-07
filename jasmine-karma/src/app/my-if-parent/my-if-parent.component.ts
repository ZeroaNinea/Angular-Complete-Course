import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyIfChild1Component } from '../my-if-child-1/my-if-child-1.component';

@Component({
  selector: 'app-my-if-parent',
  imports: [FormsModule, MyIfChild1Component],
  standalone: true,
  templateUrl: './my-if-parent.component.html',
  styleUrl: './my-if-parent.component.scss',
})
export class MyIfParentComponent implements OnInit {
  ngOnInitCalled = false;
  parentValue = 'Hello, World';
  showChild = false;
  toggleLabel = 'Unknown';
  ngOnInit() {
    this.ngOnInitCalled = true;
    this.clicked();
  }
  clicked() {
    this.showChild = !this.showChild;
    this.toggleLabel = this.showChild ? 'Close' : 'Show';
  }
}
