import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { TableExampleComponent } from './table-example/table-example.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModule,
    AsyncPipe,
    JsonPipe,
    CommonModule,
    TableExampleComponent,
    ScrollingModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent extends MaterialModule {
  title = 'angular-material-freecodecamp';

  notifications: number = 0;
  showSpinner: boolean = false;

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }

  opened: boolean = false;

  log(state: string) {
    console.log(state);
  }

  numbers: number[] = [];

  constructor() {
    super();
    for (let i: number = 0; i < 100; i++) {
      this.numbers.push(i);
    }
  }
}
