import { createSlice } from "@reduxjs/toolkit";

const initialState = { product: { reviews: [] } };

export const productDetailsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setProductDetails } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
