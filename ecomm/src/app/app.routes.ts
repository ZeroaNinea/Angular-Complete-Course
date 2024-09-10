import { Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";

export const routes: Routes = [
  {
    path: "category/:name",
    component: AppComponent,
  },
  {
    path: "product",
    component: ProductComponent,
  },
];
