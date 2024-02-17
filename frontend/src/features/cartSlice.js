import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartItems: cartItemsFromLocalStorage,
};
export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cartAddItem: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item._id);

      const itemData = {
        id: item._id,
        name: item.name,
        image: item.image,
        price: item.price,
        countInStock: item.countInStock,
        qty: parseInt(item.qty),
      };
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.id === itemData.id ? itemData : x
        );
      } else {
        state.cartItems = [...state.cartItems, itemData];
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    cartRemoveItem: (state, action) => {
      const idToRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== idToRemove);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { cartAddItem, cartRemoveItem } = cartSlice.actions;

export default cartSlice.reducer;
