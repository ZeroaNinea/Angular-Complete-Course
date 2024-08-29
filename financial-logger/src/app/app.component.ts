import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { provideStore } from "@ngrx/store";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  // providers: [provideStore()],
})
export class AppComponent {
  title = "financial-logger";
}
