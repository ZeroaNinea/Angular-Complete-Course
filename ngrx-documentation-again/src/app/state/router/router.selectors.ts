import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterReducerState, getRouterSelectors } from "@ngrx/router-store";

// Select the router state.
export const selectRouter = createFeatureSelector<RouterReducerState>("router");

// Use the built-in selectors from @ngrx/router-store.
export const {
  selectCurrentRoute, // Select the current route.
  selectFragment, // Select the current route fragment.
  selectQueryParams, // Select the current route query parametors.
  selectQueryParam, // Factory function to select a query parametor.
  selectRouteParams, // Select the current route parametors.
  selectRouteParam, // Factory function to select a route parametor.
  selectRouteData, // Select the current route data.
  selectRouteDataParam, // Factory function to select a route data parametor.
  selectUrl, // Select the current URL.
  selectTitle, // Select the title if available.
} = getRouterSelectors(selectRouter);

// Example of a custom selector to get a specific param from the route.
export const selectPostId = createSelector(
  selectRouteParams,
  (params) => params["id"], // 'id' should be the route param you're interested in.
);
