import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = { cart: [] };

export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cartAddItem: (state, action) => {
      state.cart = action.payload;
    },
    cartRemoveItem: (state, action) => {
      state.cart = state.cart - 1;
    },
  },
});

export const { cartAddItem, cartRemoveItem } = cartSlice.actions;

export default cartSlice.reducer;
