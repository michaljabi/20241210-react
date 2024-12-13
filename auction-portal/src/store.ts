import {configureStore} from "@reduxjs/toolkit";
import cartReducer, {cartSlice} from './auction/cart/cartSlice.ts'

export const store = configureStore({
    reducer: {
        [cartSlice.name]: cartReducer
    },
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;