import {AuctionItem} from "./AuctionItem.ts";
import {AuctionCard} from "./AuctionCard.tsx";
import {useEffect} from "react";
import {auctionService} from "./auction.service.ts";

export function AuctionsPage() {

    const auctions: AuctionItem[] = [];

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await auctionService.getAll()
                console.log(response.data)
            } catch (err: unknown) {
                if (err instanceof Error) {
                    console.log(err.message)
                }
            }
        }
        fetchData();

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
