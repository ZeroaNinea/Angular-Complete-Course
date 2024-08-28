import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [NgOptimizedImage],
  // template: `
  //   Username: {{ username }}
  //   <p>The user's name is {{ occupation }}</p>
  //   <p>The user's name is {{ name }}</p>
  // `,
  templateUrl: "./user.component.html",
  // styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation = "";
  @Input() name = "";

  logoUrl = "favicon.ico";
  logoAlt = "Angular logo";
  username = "youngTech";

  count = 0;

  @Output() incrementCountEvent = new EventEmitter<number>();
  @Output() addItemEvent = new EventEmitter<string>();

  onClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }

  addItem() {
    this.addItemEvent.emit("🐢");
  }
}
