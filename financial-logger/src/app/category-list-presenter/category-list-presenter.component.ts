import {
  Component,
  Input,
  // ChangeDetection
} from "@angular/core";

import { MatListModule } from "@angular/material/list";

import { Category } from "../state/state";

@Component({
  selector: "app-category-list-presenter",
  standalone: true,
  imports: [MatListModule],
  templateUrl: "./category-list-presenter.component.html",
  styleUrl: "./category-list-presenter.component.css",
  // changeDetectionStrategy: ChangeDetection.OnPush,
})
export class CategoryListPresenterComponent {
  @Input() categories: Category[] = [];
}
