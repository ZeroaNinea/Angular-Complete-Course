import { Routes } from "@angular/router";
import { provideState } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";

import { AppComponent } from "./app.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import ProductComponent from "./product/product.component";
import { productFeature } from "./store/product.selector";
import { loadProducts } from "./store/product.effects";

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
        // providers: [
        //   provideState(productFeature),
        //   provideEffects({ loadProducts }),
        // ],
      },
    ],
    // data: {
    //   animation: "CategoryPage",
    // },
  },
];
