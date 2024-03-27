import { createSlice } from "@reduxjs/toolkit";

const initialState = {order: {}, orderDetails: {}};
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
  },
});

export const { createOrder, orderReset, getOrderDetails } = orderSlice.actions;
export default orderSlice.reducer;
