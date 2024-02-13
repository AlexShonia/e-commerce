import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/getProductsSlice";
import productDetailsSlice from "./features/getProductDetailsSlice";

const store = configureStore({
  reducer: {
    productDetails: productDetailsSlice,
    products: productsSlice,
  },
});

export default store;
