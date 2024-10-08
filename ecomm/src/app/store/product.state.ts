import { createReducer, on, createFeature, createSelector } from "@ngrx/store";
import { productActions } from "./product.action";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity?: number;
}

export interface ProductState {
  products: Product[];
  productCount: number;
  error: string;
}

export const initialState: ProductState = {
  products: [],
  productCount: 0,
  error: "",
};

export const productReducer = createReducer(
  initialState,
  on(productActions.productSuccess, (state, action) => ({
    ...state,
    products: action.products,
    productCount: action.products.length,
    error: "",
  })),
  on(productActions.productFailure, (state, action) => ({
    ...state,
    products: [],
    productCount: 0,
    error: action.error,
  })),
);

const productFeatureKey = "product";

export const productFeature = createFeature({
  name: productFeatureKey,
  reducer: productReducer,
  extraSelectors: ({ selectProducts, selectProductCount, selectError }) => ({
    selectProducts,
    selectProductCount,
    selectError,
    filterProductsByCategory: (category: string) =>
      createSelector(selectProducts, (products) =>
        products.filter((product) => product.category === category),
      ),
  }),
});
