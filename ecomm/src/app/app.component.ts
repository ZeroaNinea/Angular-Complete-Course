import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { MainNavComponent } from "./main-nav/main-nav.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HomeComponent, MainNavComponent],
  templateUrl: "./app.component.html",
  // template: `
  //   Hello from AppComponent
  //   <app-home></app-home>
  //   <app-main-nav></app-main-nav>
  // `,
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ecomm";
}
