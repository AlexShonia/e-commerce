import { createSlice } from "@reduxjs/toolkit";

const initialState = { productsList: [], page: 1, pages: 0 };

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: { 
		setProductsData: (state, action) => {
			state.productsList = action.payload.products;
			state.page = action.payload.page;
			state.pages = action.payload.pages;
		},
	},
});

export const { setProductsData } = productsSlice.actions;

export default productsSlice.reducer;
