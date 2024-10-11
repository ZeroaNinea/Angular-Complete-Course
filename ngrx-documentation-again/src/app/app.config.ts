import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";

import { provideStore, provideState } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";

import { counterReducer } from "./state/counter.reducer";
import { CounterEffects } from "./state/counter.effect";

import { scoreboardReducer } from "./state/scoreboard/scoreboard.reducer";
import { scoreboardFeatureKey } from "./state/scoreboard/scoreboard.state";
import { provideStoreDevtools } from "@ngrx/store-devtools";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    // Counter
    // provideStore({ count: counterReducer }),
    provideState({ name: "count", reducer: counterReducer }),
    provideEffects(CounterEffects),
    // /Counter
    // Scoreboard
    // provideStore({ game: scoreboardReducer }),
    provideState({ name: scoreboardFeatureKey, reducer: scoreboardReducer }),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true, // If set to true, the connection is established within the Angular zone
    }),
  ],
};
