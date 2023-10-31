import { createSlice } from "@reduxjs/toolkit";
import { current } from "./../../node_modules/immer/compat/pre-3.7/dist/immer.d";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFectching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFectching = true;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isFectching = false;
    },
    loginFailure: (state, action) => {
      state.isFectching = false;
      state.error = true;
    },
    logoutUser : (state) => {
      state.isFectching = false;
      state.currentUser = null;
      state.error = false;
    }
  },
});
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutUser,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} = userSlice.actions;
export default userSlice.reducer;
