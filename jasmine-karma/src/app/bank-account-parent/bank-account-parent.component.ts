import { Component } from '@angular/core';
import { BankAccountComponent } from '../bank-account/bank-account.component';

@Component({
  selector: 'app-bank-account-parent',
  imports: [BankAccountComponent],
  standalone: true,
  templateUrl: './bank-account-parent.component.html',
  styleUrl: './bank-account-parent.component.scss',
})
export class BankAccountParentComponent {
  width = 200;
  color = 'red';
  isClosed = true;
}
