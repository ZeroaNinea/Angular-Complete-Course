import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withComponentInputBinding,
} from "@angular/router";

import { routes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

import { provideState } from "@ngrx/store";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";

import { isDevMode } from "@angular/core";
import { provideHttpClient, withFetch } from "@angular/common/http";

import { categoryReducer } from "./state/categories.reducer";
import { CategoryEffects } from "./state/category.effects";
import { categoryFeature } from "./state/category.selector";
import { productFeature } from "./store/product.selector";
import { loadProducts, loadProductsByCategory } from "./store/product.effects";
import { loadCart } from "./cart/store/cart.effects";
import { cartFeature } from "./cart/store/cart.selector";
import { cartReducer } from "./cart/store/cart.reducer";
import { authGuard } from "./login/login.guard";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation(),
      withComponentInputBinding(),
    ),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    // Category
    // provideState("category", { categories: categoriesReducer }),
    provideStore({ category: categoryReducer }),
    provideState(categoryFeature),
    // provideStore({}),
    provideEffects([CategoryEffects]),
    // /Category
    // Product
    provideStore({ product: productFeature.reducer }),
    provideState(productFeature),
    provideEffects([{ loadProducts, loadProductsByCategory }]),
    // /Product
    // Cart
    provideStore({ cart: cartReducer }),
    provideState(cartFeature),
    provideEffects([{ loadCart }]),
    // /Cart
    provideHttpClient(withFetch()),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
