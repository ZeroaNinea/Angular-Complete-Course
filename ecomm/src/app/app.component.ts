import { Component, OnInit } from "@angular/core";
import { CommonModule, AsyncPipe, JsonPipe } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { inject } from "@angular/core/testing";

import { Observable } from "rxjs";

import { CategoryService } from "./state/category.service";
import { HomeComponent } from "./home/home.component";
import { MainNavComponent } from "./main-nav/main-nav.component";

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
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ecomm";
  categories$!: Observable<string[]>;

  constructor(private readonly categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
    // console.log(this.categories$);
    // this.categories$.subscribe({
    //   next: (data) => console.log("Categories data: ", data),
    //   error: (err) => console.error("Error: ", err),
    // });
  }
}
