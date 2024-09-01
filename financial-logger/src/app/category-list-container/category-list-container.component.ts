import { Component } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { Store } from "@ngrx/store";

import { CategoryListPresenterComponent } from "../category-list-presenter/category-list-presenter.component";

import { categories } from "../state/selectors";

@Component({
  selector: "app-category-list-container",
  standalone: true,
  imports: [CategoryListPresenterComponent],
  template: `
    <app-category-list-presenter [categories]="categories$ | async">
    </app-category-list-presenter>
  `,
  // templateUrl: "./category-list-container.component.html",
  // styleUrl: "./category-list-container.component.css",
})
export class CategoryListContainerComponent {
  categories$ = this.store.select(categories);

  constructor(private readonly store: Store) {}
}
