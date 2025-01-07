import { Component, OnInit, Optional } from '@angular/core';
import { ValueService } from '../services/value/value.service';

@Component({
  selector: 'app-external-template',
  imports: [],
  standalone: true,
  templateUrl: './external-template.component.html',
  styleUrl: './external-template.component.scss',
})
export class ExternalTemplateComponent implements OnInit {
  serviceValue = '';

  constructor(@Optional() private service?: ValueService) {}

  ngOnInit() {
    if (this.service) {
      this.serviceValue = this.service.getValue();
    }
  }
}
