import {
  createFeatureSelector,
  createSelector,
  createFeature,
} from "@ngrx/store";

import { ProductState } from "./product.state";

import { productReducer } from "./product.reducer";

// export const selectCategoryState = (state: CategoryState) => state;

const productFeatureKey = "product";

export const selectProductState =
  createFeatureSelector<ProductState>(productFeatureKey);

export const selectProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products,
);

export const selectError = createSelector(
  selectProductState,
  (state: ProductState) => state.error,
);

export const productFeature = createFeature({
  name: productFeatureKey,
  reducer: productReducer,
});
