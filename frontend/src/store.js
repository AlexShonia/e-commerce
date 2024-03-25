import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/getProductsSlice";
import productDetailsSlice from "./features/getProductDetailsSlice";
import cartSlice from "./features/cartSlice";
import userLoginSlice from "./features/authSlice";
import authSlice from "./features/authSlice";
import userDetailsSlice from "./features/userDetailsSlice";

const store = configureStore({
  reducer: {
    productDetails: productDetailsSlice,
    products: productsSlice,
    cart: cartSlice,
    userLogin: authSlice,
    userDetails: userDetailsSlice,
  },
});

export default store;
