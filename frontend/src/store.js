import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/getProductsSlice";
import productDetailsSlice from "./features/getProductDetailsSlice";
import cartSlice from "./features/cartSlice";

const store = configureStore({
  reducer: {
    productDetails: productDetailsSlice,
    products: productsSlice,
    cart: cartSlice,
  },
});

export default store;
