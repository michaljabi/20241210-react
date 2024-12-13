import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartItem} from "./CartItem.ts";
import {AuctionItem} from "../AuctionItem.ts";
import {RootState} from "../../store.ts";

interface CartSate {
    items: CartItem[]
}

const initialState: CartSate = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        //wymyślasz nazwy akcji:
        addItem: (state: CartSate, action: PayloadAction<AuctionItem>) => {
            const item = state.items.find(i => i.id === action.payload.id);
            if(item) {
                item.quantity++;
            } else {
                state.items.push({
                    id: action.payload.id,
                    quantity: 1,
                    auction: action.payload
                })
            }
        }
    }
})

// Commands (Actions)
export const { addItem } = cartSlice.actions;

// Queries (Selectors)
export const selectAllItems = (rootState: RootState) => rootState[cartSlice.name].items;
export const selectAllItemsCount = (rootState: RootState) =>
    rootState[cartSlice.name].items
    .map(i => i.quantity)
    .reduce((a, b) => a + b, 0);

export default cartSlice.reducer;