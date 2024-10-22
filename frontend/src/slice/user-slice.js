import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUserStart: (state) => {
      state.isLoading = true;
    },
    signUserSuccess: (state, action) => {
      state.isLoading = false;
      state.loggedIn = true;
      state.user = action.payload;
    },
    signUserFailure: (state, action) => {
      state.isLoading = false;
      state.loggedIn = false;
      state.user = null;
      state.error = action.payload;
    },

    signOutUser: (state) => {
      state.isLoading = false;
      state.loggedIn = false;
      state.user = null;
      state.error = null;
      localStorage.removeItem("accessToken");
    },
  },
});

export const { signUserStart, signUserSuccess, signUserFailure, signOutUser } =
  userSlice.actions;

export const userReducer = userSlice.reducer;
