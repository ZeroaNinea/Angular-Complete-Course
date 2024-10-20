import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from "@angular/core";
import {
  provideHttpClient,
  withFetch,
  HttpClientModule,
} from "@angular/common/http";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";

// import { provideRouterStore, routerReducer } from "@ngrx/router-store";

import { provideStore, provideState } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
// import { StoreModule } from "@ngrx/store";

import { counterReducer } from "./state/counter.reducer";
import { CounterEffects } from "./state/counter.effect";
// import { postsReducer } from "./state/posts/posts.reducer";
import { PostsEffects } from "./posts/state/post.effects";
import { postReducer } from "./posts/state/post.reducer";
// import { PostEffects } from "./posts/state/post.effects";

import { scoreboardReducer } from "./state/scoreboard/scoreboard.reducer";
import { scoreboardFeatureKey } from "./state/scoreboard/scoreboard.state";

import { provideStoreDevtools } from "@ngrx/store-devtools";
import { provideRouterStore, routerReducer } from "@ngrx/router-store";
import { provideEntityData, withEffects } from "@ngrx/data";
// import { entityConfig } from "./entity-metadata";
import { entityConfig } from "./product/state/entity-metadata/entity-metadata";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    HttpClientModule,
    provideStore(),
    // Counter
    provideStore({ count: counterReducer }),
    provideState({ name: "count", reducer: counterReducer }),
    provideEffects(CounterEffects),
    // /Counter
    // Scoreboard
    // provideStore({ game: scoreboardReducer }),
    // provideState({ name: scoreboardFeatureKey, reducer: scoreboardReducer }),
    // /Scoreboard
    // Posts
    provideState({ name: "posts", reducer: postReducer }),
    provideEffects(PostsEffects),
    // /Posts
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    }),
    provideRouterStore(),
    // provideStore({ router: routerReducer }),
    provideState({ name: "router", reducer: routerReducer }),
    provideEntityData(entityConfig, withEffects()),
  ],
};
