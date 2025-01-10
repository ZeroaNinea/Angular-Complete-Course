import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  // columns = input.required<TableColumnDefinition[]>();
  columns = input.required<any[]>();
  tableData = input.required<any[]>();
  buttonText = signal<string>('Copy');
  selectedRow = signal<any | null>(null);

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(
      () => {
        this.selectedRow.set('Copied');
        setTimeout(() => {
          this.buttonText.set('Copy');
        }, 2000);
      },
      (err) => {
        console.error('Failed to copy url: ', err);
      }
    );
  }
}
