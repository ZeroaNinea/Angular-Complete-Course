export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
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
