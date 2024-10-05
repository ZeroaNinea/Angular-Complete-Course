import { Routes } from "@angular/router";
import { provideState } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";

import { AppComponent } from "./app.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import ProductComponent from "./product/product.component";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from "./login/login.component";
import { authGuard } from "./login/login.guard";

import { productFeature } from "./store/product.selector";
import { loadProducts, loadProductsByCategory } from "./store/product.effects";

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
      { path: "product", component: ProductComponent, canMatch: [authGuard] },
      {
        path: "product/:categoryName",
        component: ProductComponent,
        data: {
          animation: "CategoryPage",
        },
        // providers: [
        //   provideState(productFeature),
        //   provideEffects({ loadProducts, loadProductsByCategory }),
        // ],
        canMatch: [authGuard],
      },
      {
        path: "cart",
        component: CartComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
    ],
    // data: {
    //   animation: "CategoryPage",
    // },
  },
];
