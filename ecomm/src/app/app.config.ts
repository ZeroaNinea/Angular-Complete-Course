import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

import { provideState } from "@ngrx/store";
import { provideStore } from "@ngrx/store";

import { provideEffects } from "@ngrx/effects";
import { provideHttpClient, withFetch } from "@angular/common/http";

import { categoryReducer } from "./state/categories.reducer";
import { CategoryEffects } from "./state/category.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    // provideState("category", { categories: categoriesReducer }),
    provideStore({ category: categoryReducer }),
    // provideStore({}),
    provideEffects([CategoryEffects]),
    provideHttpClient(withFetch()),
  ],
};