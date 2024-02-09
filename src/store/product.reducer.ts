import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { menuBaguettes } from "./products";

interface Baguette {
  name: string;
  description: string;
  ingredients: string[];
  cost: number;
  img: string;
  stock: number;
  isTopSell: boolean;
  id: number;
}
interface ProductState {
  baggetes: Baguette[];
  cart: {
    id: number;
    quantity: number;
  }[];
}

// Define the initial state using that type
const initialState: ProductState = {
  baggetes: menuBaguettes,
  cart: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.cart[index].quantity += 1;
      } else {
        state.cart.push({ id: action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.cart[index].quantity -= 1;
        if (state.cart[index].quantity === 0) {
          state.cart.splice(index, 1);
        }
      }
    },
    addProduct: (
      state,
      action: PayloadAction<{
        name: string;
        description: string;
        ingredients: string[];
        cost: number;
        img: string;
      }>
    ) => {
      state.baggetes.push({
        ...action.payload,
        stock: 10,
        isTopSell: false,
        id: state.baggetes.length + 1,
      });
    },
  },
});

export const { addToCart, removeFromCart,addProduct } = productSlice.actions;

export default productSlice.reducer;
