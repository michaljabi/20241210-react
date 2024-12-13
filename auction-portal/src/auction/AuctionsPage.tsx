import {AuctionItem} from "./AuctionItem.ts";
import {AuctionCard} from "./AuctionCard.tsx";
import {useEffect, useState} from "react";
import {auctionService} from "./auction.service.ts";

export function AuctionsPage() {

    // let auctions: AuctionItem[] = [];
    const [auctions, setAuctions] = useState<AuctionItem[]>([])

    useEffect(() => {

        // IIFE Immediately Invoked Function Expression
        // https://developer.mozilla.org/en-US/docs/Glossary/IIFE
        (async () => {
            try {
                const response = await auctionService.getAll()
                setAuctions(response.data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    console.log(err.message)
                }
            }
        })();

    }, [])

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
