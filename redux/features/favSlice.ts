import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavItem {
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
    addFavItem: (state, action: PayloadAction<FavItem>) => {
      state.items.push(action.payload);
    },
    removeFavItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearFav: (state) => {
      state.items = [];
    },
  },
});

export const { addFavItem, removeFavItem, clearFav } = favSlice.actions;

export default favSlice.reducer;
