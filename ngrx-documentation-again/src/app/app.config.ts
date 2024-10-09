import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";

import { provideStore } from "@ngrx/store";

import { counterReducer } from "./state/counter.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    // Counter
    provideStore({ counter: counterReducer }),
    // /Counter
  ],
};
