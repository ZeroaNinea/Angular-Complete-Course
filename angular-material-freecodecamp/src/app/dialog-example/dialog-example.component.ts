import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-example',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatDialogClose,
    MatButtonModule,
  ],
  templateUrl: './dialog-example.component.html',
  styleUrl: './dialog-example.component.scss',
})
export class DialogExampleComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { name: string }) {}

  ngOnInit() {}
}
