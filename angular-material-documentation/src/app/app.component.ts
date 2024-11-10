import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  MyCustomFieldComponent,
  MyTel,
} from './my-custom-field/my-custom-field.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterOutlet,
    AddressFormComponent,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MyCustomFieldComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-material-documentation';

  form = new FormGroup({
    myTel: new FormControl(new MyTel('', '', ''), Validators.required),
  });
}
