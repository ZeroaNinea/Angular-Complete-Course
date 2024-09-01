import { Component, OnInit } from "@angular/core";
import { AsyncPipe, CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { CategoryListPresenterComponent } from "../category-list-presenter/category-list-presenter.component";
import { getCategories } from "../state/selectors";
import { AppState, Category } from "../state/state";

@Component({
  selector: "app-category-list-container",
  standalone: true,
  imports: [CommonModule, AsyncPipe, CategoryListPresenterComponent],
  // template: `
  //   <app-category-list-presenter [categories]="categories$ | async ?? []">
  //   </app-category-list-presenter>
  // `,
  // template: `
  //   <ng-container *ngIf="categories$ | async as categories; else noCategories">
  //     <app-category-list-presenter [categories]="categories">
  //     </app-category-list-presenter>
  //   </ng-container>
  //   <ng-template #noCategories>
  //     <app-category-list-presenter [categories]="[]">
  //     </app-category-list-presenter>
  //   </ng-template>
  // `,
  templateUrl: "./category-list-container.component.html",
  styleUrl: "./category-list-container.component.css",
})
export class CategoryListContainerComponent implements OnInit {
  categories$!: Observable<Category[]>;

  constructor(private readonly store: Store<{ categories: AppState }>) {}

  ngOnInit(): void {
    this.categories$ = this.store.select(getCategories);
    console.log("---------------------");
    console.log(this.categories$);
  }
}
