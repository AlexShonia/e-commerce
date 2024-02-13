import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

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
