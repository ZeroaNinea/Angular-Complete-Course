import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";

import { CartState } from "./cart.state";
import { Product } from "../../store/product.state";

import { cartReducer } from "./cart.reducer";

import { userFeature } from "../../login/store/user.state";
import { productFeature } from "../../store/product.state";

const cartFeatureKey = "cart";

export const selectCartState = createFeatureSelector<CartState>(cartFeatureKey);

export const selectCart = createSelector(
  selectCartState,
  (state) => state.cart,
);

export const selectCurrentCart = createSelector(
  selectCartState,
  (state) => state.currentCart,
);

export const cartFeature = createFeature({
  name: cartFeatureKey,
  reducer: cartReducer,
});

export const userCartSelector = createSelector(
  selectCurrentCart,
  userFeature.selectUser,
  productFeature.selectProducts,
  (cart, user, products) => {
    if (cart && user) {
      return {
        ...cart,
        user,
        products: cart.products.map((product) => {
          const productDetail = products.find(
            (p) => p.id === product.productId,
          );
          return {
            ...product,
            ...productDetail,
          };
        }),
      };
    }
    return undefined;
  },
);
