import { createSlice } from "@reduxjs/toolkit";

const filterSlicers = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    changeFilter: (state, action) => action.payload,
  },
});

export const { changeFilter } = filterSlicers.actions;
export default filterSlicers;
