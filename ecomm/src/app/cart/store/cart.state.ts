import { User } from "../../login/store/user.state";
import { Product } from "../../store/product.state";

export interface CartProduct {
  productId: number;
  quantity: number;
}
export interface Cart {
  id: number;
  userId: number;
  date: Date;
  user?: User;
  // products: [
  //   {
  //     productId: number;
  //     quantity: number;
  //   },
  // ];
  products: CartProduct[];
  ProductDetails: Product[];
}

export interface CartState {
  cart: Cart[];
  currentCart: Cart;
  error: string;
}

export const initialState: CartState = {
  cart: [],
  currentCart: {
    id: 0,
    userId: 0,
    date: new Date(),
    products: [],
    ProductDetails: [],
  },
  error: "",
};
