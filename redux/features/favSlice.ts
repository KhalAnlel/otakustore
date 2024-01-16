import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavItem {
  id: string;
}

interface FavState {
  items: FavItem[];
}

const initialState: FavState = {
  items: [],
};

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<FavItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearFav: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearFav } = favSlice.actions;

export default favSlice.reducer;
