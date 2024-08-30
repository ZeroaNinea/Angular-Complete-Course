import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { provideStore } from "@ngrx/store";

import { addCategory, categoryActions } from "./state/actions";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  // providers: [provideStore()],
})
export class AppComponent implements OnInit {
  title = "financial-logger";
  ngOnInit() {
    console.log(addCategory({ category: { name: "Food" } }));
    console.log("----------------");
    console.log(
      categoryActions.addCategory({ category: { name: "Food" } }),
      categoryActions.addAnotherCategory({ category: { name: "Food" } }),
    );
  }
}
