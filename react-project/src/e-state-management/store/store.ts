import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { counterSlice } from "./counterSlice.ts";
import ordersReducer, { ordersSlice } from "./ordersSlice.ts";

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterReducer,
    [ordersSlice.name]: ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
