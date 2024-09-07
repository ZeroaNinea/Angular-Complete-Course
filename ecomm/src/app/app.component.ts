import { Component, OnInit } from "@angular/core";
import { CommonModule, AsyncPipe, JsonPipe } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { inject } from "@angular/core/testing";

import { Observable } from "rxjs";

import { CategoryService } from "./state/category.service";
import { HomeComponent } from "./home/home.component";
import { MainNavComponent } from "./main-nav/main-nav.component";

import { Store } from "@ngrx/store";
import {
  categoryActions,
  categoryActionsFailure,
  categoryActionsSuccess,
} from "./state/categories.actions";
import { selectCategories } from "./state/category.selector";
import { CategoryState } from "./state/state";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    RouterOutlet,
    HomeComponent,
    MainNavComponent,
    CommonModule,
  ],
  templateUrl: "./app.component.html",
  // template: `
  //   Hello from AppComponent
  //   <app-home></app-home>
  //   <app-main-nav></app-main-nav>
  // `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ecomm";
  categories$!: Observable<string[]>;
  // categoriesSelector$!: Observable<any>;

  constructor(
    private readonly categoryService: CategoryService,
    private store: Store<CategoryState>,
  ) {}

  ngOnInit(): void {
    // this.categories$ = this.categoryService.getCategories();
    this.store.dispatch(categoryActions());
    this.categories$ = this.store.select(selectCategories);
    // console.log(this.categories$);
    // this.categories$.subscribe({
    //   next: (data) => console.log("Categories data: ", data),
    //   error: (err) => console.error("Error: ", err),
    // });
  }
}
