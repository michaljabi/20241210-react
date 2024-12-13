import {AuctionItem} from "./AuctionItem.ts";
import {AuctionCard} from "./AuctionCard.tsx";

export function AuctionsPage() {

    const auctions: AuctionItem[] = [];

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
