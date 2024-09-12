import { Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import ProductComponent from "./product/product.component";

export const routes: Routes = [
  // {
  //   path: "",
  //   component: AppComponent,
  // },
  // {
  //   path: "category/:categoryName",
  //   component: MainNavComponent,
  // },
  // {
  //   path: "product",
  //   component: ProductComponent,
  // },
  {
    path: "",
    component: MainNavComponent,
    children: [
      { path: "", component: ProductComponent },
      {
        path: "category/:categoryName",
        component: ProductComponent,
        data: {
          animation: "CategoryPage",
        },
      },
    ],
    // data: {
    //   animation: "CategoryPage",
    // },
  },
];
