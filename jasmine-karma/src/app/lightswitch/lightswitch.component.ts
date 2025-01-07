import { Component } from '@angular/core';

@Component({
  selector: 'app-lightswitch',
  imports: [],
  standalone: true,
  templateUrl: './lightswitch.component.html',
  styleUrl: './lightswitch.component.scss',
})
export class LightswitchComponent {
  isOn = false;
  clicked() {
    this.isOn = !this.isOn;
  }
  get message() {
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }
}
