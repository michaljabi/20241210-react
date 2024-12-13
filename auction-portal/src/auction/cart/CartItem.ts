import {AuctionItem} from "../AuctionItem.ts";

export interface CartItem {
    id: AuctionItem['id'];
    quantity: number;
    auction: AuctionItem;
}