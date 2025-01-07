import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Component({
  selector: 'app-io',
  imports: [],
  standalone: true,
  templateUrl: './io.component.html',
  styleUrl: './io.component.scss',
})
export class IoComponent {
  @Input() hero!: Hero;
  @Output() selected = new EventEmitter<Hero>();
  click() {
    this.selected.emit(this.hero);
  }
}
