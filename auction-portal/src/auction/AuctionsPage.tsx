import {AuctionItem} from "./AuctionItem.ts";
import {AuctionCard} from "./AuctionCard.tsx";

export function AuctionsPage() {

    const auctions: AuctionItem[] = [
        {
            id: "LqGA",
            title: "Mac Book",
            imgUrl: "https://picsum.photos/id/48/600/600",
            description: "Używany - ale sprawny",
            price: 4000
        },
        {
            id: "kV-c",
            title: "Smartfon",
            imgUrl: "https://picsum.photos/id/160/600/600",
            price: 800
        },
    ];

    return (
        <>
            <h2> Lista Aukcji </h2>
            <div className="row">
                {
                    auctions.map(a => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={a.id}>
                            <AuctionCard auction={a}/>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
