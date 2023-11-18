import { createSlice } from "@reduxjs/toolkit";

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
    loginFailure: (state) => {
      state.isFectching = false;
      state.error = true;
    },
    logoutUser: (state) => {
      state.isFectching = false;
      state.currentUser = null;
      state.error = false;
    },
    updateImageStart: (state) => {
      state.isFectching = false;
    },
    updateImageSuccess: (state, action) => {
      state.currentUser = {
        ...action.payload,
        accessToken: state.currentUser.accessToken,
      };
      state.isFectching = false;
    },
    updateImageFailure: (state) => {
      state.isFectching = false;
      state.error = true;
    },
  },
});
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutUser,
  updateImageStart,
  updateImageSuccess,
  updateImageFailure
} = userSlice.actions;
export default userSlice.reducer;
