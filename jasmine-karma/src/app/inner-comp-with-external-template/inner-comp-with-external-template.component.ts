import { Component } from '@angular/core';
import { ExternalTemplateComponent } from '../external-template/external-template.component';

@Component({
  selector: 'app-inner-comp-with-external-template',
  imports: [ExternalTemplateComponent],
  standalone: true,
  templateUrl: './inner-comp-with-external-template.component.html',
  styleUrl: './inner-comp-with-external-template.component.scss',
})
export class InnerCompWithExternalTemplateComponent {}
