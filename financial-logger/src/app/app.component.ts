import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { provideStore, StoreModule } from "@ngrx/store";

import { MatListModule } from "@angular/material/list";

import { CategoryListPresenterComponent } from "./category-list-presenter/category-list-presenter.component";
import { CategoryListContainerComponent } from "./category-list-container/category-list-container.component";

import { addCategory, categoryActions } from "./state/actions";
// import { reducer } from "./state/reducer";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    MatListModule,
    CategoryListPresenterComponent,
    CategoryListContainerComponent,
    // StoreModule.forRoot({ categories: reducer }),
  ],
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
