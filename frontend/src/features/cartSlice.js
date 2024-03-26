import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : null;

const initialState = {
  cartItems: cartItemsFromLocalStorage,
  shippingAddress: shippingAddressFromStorage,
  paymentMethod: paymentMethodFromStorage,
};

export const cartSlice = createSlice({
  name: "cart",
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
    setShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem(
        "shippingAddress",
        JSON.stringify(state.shippingAddress)
      );
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      localStorage.setItem(
        "paymentMethod",
        JSON.stringify(state.paymentMethod)
      );
    },
    cartReset: (state, action) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const {
  cartAddItem,
  cartRemoveItem,
  setShippingAddress,
  savePaymentMethod,
  cartReset,
} = cartSlice.actions;

export default cartSlice.reducer;
