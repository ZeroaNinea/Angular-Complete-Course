import { Component, Input, ChangeDetection } from "@angular/core";

@Component({
  selector: "app-category-list-presenter",
  standalone: true,
  imports: [],
  templateUrl: "./category-list-presenter.component.html",
  styleUrl: "./category-list-presenter.component.css",
  changeDetectionStrategy: ChangeDetection.OnPush,
})
export class CategoryListPresenterComponent {
  @Input() categories: Category[] = [];
}
