import { createSlice } from "@reduxjs/toolkit";

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo: userInfoFromLocalStorage,
  userList: [],
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
    getUserList: (state, action) => {
      state.userList = action.payload;
    },
    resetUserList: (state, action) => {
      state.userList = [];
    },
  },
});

export const { Login, Logout, Register, getUserList, resetUserList } =
  authSlice.actions;

export default authSlice.reducer;
