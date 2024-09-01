import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";

import { provideStore, ActionReducer, Action } from "@ngrx/store";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

import { reducer } from "./app/state/reducer";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err),
// );

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore({
      categories: reducer,
    }),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
  ],
}).catch((err) => console.log(err));
