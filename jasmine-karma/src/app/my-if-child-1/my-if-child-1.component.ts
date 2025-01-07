import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-if-child-1',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './my-if-child-1.component.html',
  styleUrl: './my-if-child-1.component.scss',
})
export class MyIfChild1Component implements OnInit, OnChanges, OnDestroy {
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();
  get childValue() {
    return this.value;
  }
  set childValue(v: string) {
    if (this.value === v) {
      return;
    }
    this.value = v;
    this.valueChange.emit(v);
  }
  changeLog: string[] = [];
  ngOnInitCalled = false;
  ngOnChangesCounter = 0;
  ngOnDestroyCalled = false;
  ngOnInit() {
    this.ngOnInitCalled = true;
    this.changeLog.push('ngOnInit called');
  }
  ngOnDestroy() {
    this.ngOnDestroyCalled = true;
    this.changeLog.push('ngOnDestroy called');
  }
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      this.ngOnChangesCounter += 1;
      const prop = changes[propName];
      const cur = JSON.stringify(prop.currentValue);
      const prev = JSON.stringify(prop.previousValue);
      this.changeLog.push(
        `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      );
    }
  }
}
