import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";

import { provideStore, provideState } from "@ngrx/store";

import { counterReducer } from "./state/counter.reducer";
import { scoreboardReducer } from "./state/scoreboard/scoreboard.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    // Counter
    // provideStore({ count: counterReducer }),
    provideState({ name: "count", reducer: counterReducer }),
    // /Counter
    // Scoreboard
    // provideStore({ game: scoreboardReducer }),
    provideState({ name: "game", reducer: scoreboardReducer }),
    // /Scoreboard
  ],
};
