import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bank-account',
  imports: [],
  standalone: true,
  templateUrl: './bank-account.component.html',
  styleUrl: './bank-account.component.scss',
})
export class BankAccountComponent {
  @Input() bank = '';
  @Input('account') id = '';
}
