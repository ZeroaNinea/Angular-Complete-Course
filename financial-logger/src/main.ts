import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";

import { provideStore } from "@ngrx/store";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err),
// );

bootstrapApplication(AppComponent, {
  providers: [provideStore(), provideAnimationsAsync()],
}).catch((err) => console.log(err));
