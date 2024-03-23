import { createSlice } from "@reduxjs/toolkit";

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo: userInfoFromLocalStorage,
};

export const authSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    Login: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    Logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
    Register: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
  },
});

export const { Login, Logout, Register } = authSlice.actions;

export default authSlice.reducer;
