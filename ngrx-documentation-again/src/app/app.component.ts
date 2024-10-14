import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { MyCounterComponent } from "./my-counter/my-counter.component";

import { PostsComponent } from "./posts/posts.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, MyCounterComponent, PostsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ngrx-documentation-again";
}
