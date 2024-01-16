import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/features/cartSlice";
import favReducer from "@/redux/features/favSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    fav: favReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
