import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { IoComponent } from '../io/io.component';

@Component({
  selector: 'app-io-parent',
  imports: [IoComponent],
  standalone: true,
  templateUrl: './io-parent.component.html',
  styleUrl: './io-parent.component.scss',
})
export class IoParentComponent {
  heroes: Hero[] = [
    { name: 'Bob' },
    { name: 'Carol' },
    { name: 'Ted' },
    { name: 'Alice' },
  ];
  selectedHero!: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
