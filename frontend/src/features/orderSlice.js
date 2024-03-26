import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
export const orderSlice = createSlice({
  name: "orderCreate",
  initialState,
  reducers: {
    createOrder: (state, action) => {
      state.order = action.payload;
    },
    orderReset: (state, action) => {
      state.order = {};
    },
  },
});

export const { createOrder, orderReset } = orderSlice.actions;
export default orderSlice.reducer;
