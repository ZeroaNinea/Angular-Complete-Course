import { Route } from "@angular/router";
import { provideState } from "@ngrx/store";

import { scoreboardFeatureKey } from "../state/scoreboard/scoreboard.state";
import { scoreboardReducer } from "../state/scoreboard/scoreboard.reducer";

export const routes: Route[] = [
  {
    path: "scoreboard",
    providers: [
      provideState({ name: scoreboardFeatureKey, reducer: scoreboardReducer }),
    ],
  },
];
