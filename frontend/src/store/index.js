import { configureStore } from "@reduxjs/toolkit";
import { modeReducer } from "@/slice/mode-slice";
import { userReducer } from "@/slice/user-slice";

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    userData: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
