import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: false,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { setMode } = modeSlice.actions;
export const modeReducer = modeSlice.reducer;
