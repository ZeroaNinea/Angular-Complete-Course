import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TableComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'jasmine-karma-lets-program';
}
