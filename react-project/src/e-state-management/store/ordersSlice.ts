import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store.ts";

export interface OrdersSlice {
  items: string[];
}

const initialState: OrdersSlice = {
  items: ["cola"],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    // reducer'y rozdzielone "per akcja" (pozbywamy się switcha)
    addNew: (state, action: PayloadAction<string>) => {
      // możemy mutować!
      state.items.push(action.payload);
    },
  },
});

export const { addNew } = ordersSlice.actions;
export const selectAllOrderItems = (state: RootState) =>
  state[ordersSlice.name].items;

export default ordersSlice.reducer;
