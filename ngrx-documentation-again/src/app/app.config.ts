import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";

import { provideStore, provideState } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";

import { counterReducer } from "./state/counter.reducer";
import { CounterEffects } from "./state/counter.effect";

import { scoreboardReducer } from "./state/scoreboard/scoreboard.reducer";
import { scoreboardFeatureKey } from "./state/scoreboard/scoreboard.state";

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
    // /Scoreboard
  ],
};
