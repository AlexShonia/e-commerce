import { createSlice } from "@reduxjs/toolkit";

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = { LoginData: userInfoFromLocalStorage };

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    setLoginData: (state, action) => {
      state.LoginData = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state.LoginData));
    },
  },
});

export const { setLoginData } = userLoginSlice.actions;

export default userLoginSlice.reducer;
