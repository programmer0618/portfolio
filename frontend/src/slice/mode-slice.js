import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: false,
  sidebarOpen: false,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = !state.mode;
    },
    setSidebarOpen: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { setMode, setSidebarOpen } = modeSlice.actions;
export const modeReducer = modeSlice.reducer;
