import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { provideState } from "@ngrx/store";

import { productFeature } from "../store/product.selector";

@Component({
  selector: "app-product",
  standalone: true,
  imports: [CommonModule],
  // providers: [provideState(productFeature)],
  templateUrl: "./product.component.html",
  styleUrl: "./product.component.scss",
})
export default class ProductComponent {
  @Input() categoryName: string = "";
  @Input() animation: any;
}
