import {AuctionsPage} from "./AuctionsPage.tsx";
import {PromotionsPage} from "./PromotionsPage.tsx";
import {AddAuctionPage} from "./AddAuctionPage.tsx";
import {CartPage} from "./CartPage.tsx";


export const auctionRouting = [
    {
        path: "auctions",
        element: <AuctionsPage />
    },
    {
        path: "promotions",
        element: <PromotionsPage />
    },
    {
        path: "add-auction",
        element: <AddAuctionPage />
    },
    {
        path: "cart",
        element: <CartPage />
    }
]