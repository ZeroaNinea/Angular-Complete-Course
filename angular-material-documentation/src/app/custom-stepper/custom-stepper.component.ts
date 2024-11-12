import { Component, forwardRef } from '@angular/core';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-custom-stepper',
  standalone: true,
  providers: [
    {
      provide: CdkStepper,
      useExisting: forwardRef(() => CustomStepperComponent),
    },
  ],
  imports: [CommonModule, NgTemplateOutlet, CdkStepperModule, MatButtonModule],
  templateUrl: './custom-stepper.component.html',
  styleUrl: './custom-stepper.component.scss',
})
export class CustomStepperComponent extends CdkStepper {
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
