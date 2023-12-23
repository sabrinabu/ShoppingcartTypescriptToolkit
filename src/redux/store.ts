import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const rootReducer = combineReducers({
     cart:cartSlice,
  });

export const store = configureStore({
    reducer:rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;