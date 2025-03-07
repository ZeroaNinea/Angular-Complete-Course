import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { StepperComponent } from "./stepper/stepper.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [StepperComponent, RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "cypress-documentation";
}
