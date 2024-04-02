import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/productsSlice";
import productDetailsSlice from "./features/getProductDetailsSlice";
import cartSlice from "./features/cartSlice";
import userLoginSlice from "./features/authSlice";
import authSlice from "./features/authSlice";
import userDetailsSlice from "./features/userDetailsSlice";
import orderSlice from "./features/orderSlice";

const store = configureStore({
	reducer: {
		productDetails: productDetailsSlice,
		products: productsSlice,
		cart: cartSlice,
		userLogin: authSlice,
		userDetails: userDetailsSlice,
		order: orderSlice,
	},
});

export default store;
