import { createSlice } from "@reduxjs/toolkit";

const itemsSlicers = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    deleteItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = itemsSlicers.actions;

export default itemsSlicers;
