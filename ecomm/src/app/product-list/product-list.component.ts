import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Product } from "../store/product.state";

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  @Input() products: Product[] = [];
}
