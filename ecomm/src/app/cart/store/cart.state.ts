export interface Cart {
  id: number;
  userId: number;
  date: Date;
  products: [
    {
      productId: number;
      quantity: number;
    },
  ];
}

export interface CartState {
  cart: Cart[];
  error: string;
}

export const initialState: CartState = {
  cart: [],
  error: "",
};
