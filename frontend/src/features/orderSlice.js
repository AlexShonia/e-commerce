import { createSlice } from "@reduxjs/toolkit";

const myOrdersFromStorage = localStorage.getItem("myOrders")
  ? JSON.parse(localStorage.getItem("myOrders"))
  : [];

const initialState = {
  order: {},
  orderDetails: {},
  myOrders: myOrdersFromStorage,
};
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder: (state, action) => {
      state.order = action.payload;
    },
    orderReset: (state, action) => {
      state.order = {};
    },
    getOrderDetails: (state, action) => {
      state.orderDetails = action.payload;
    },
    getMyOrders: (state, action) => {
      state.myOrders = action.payload;
      localStorage.setItem("myOrders", JSON.stringify(state.myOrders));
    },
    resetMyOrders: (state) => {
      state.myOrders = {};
      localStorage.removeItem("myOrders");
    },
  },
});

export const {
  createOrder,
  orderReset,
  getOrderDetails,
  getMyOrders,
  resetMyOrders,
} = orderSlice.actions;
export default orderSlice.reducer;
